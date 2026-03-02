import { GoogleGenAI, Type } from "@google/genai";
import { MBTIType, TestResult, TeacherInsight } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateStudentReport(name: string, type: MBTIType): Promise<TestResult['report']> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `MBTI ${type}인 초등학교 6학년 학생 '${name}'을 위한 맞춤형 리포트를 작성해줘.`,
    config: {
      systemInstruction: "너는 초등학교 6학년 담임 선생님이자 교육 심리 전문가야. 13세 아동의 발달 단계에 맞춰 MBTI 성격 유형을 분석하고, 이를 바탕으로 학교생활, 학습 방법, 교우 관계에 대한 맞춤형 조언을 제공해줘. 답변은 초등학생이 이해하기 쉽게 다정하고 구체적이어야 하며, 성격에 따른 '낙인찍기'가 아닌 '상호 이해'에 초점을 맞춰야 해.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          schoolLife: { type: Type.STRING, description: "학교생활 조언" },
          studyTips: { type: Type.STRING, description: "학습 꿀팁" },
          friendships: { type: Type.STRING, description: "친구 관계 조언" },
          encouragement: { type: Type.STRING, description: "한 줄 응원 메시지" }
        },
        required: ["schoolLife", "studyTips", "friendships", "encouragement"]
      }
    }
  });

  try {
    return JSON.parse(response.text || "{}");
  } catch (e) {
    console.error("Failed to parse student report", e);
    return undefined;
  }
}

export async function generateTeacherInsight(types: MBTIType[]): Promise<TeacherInsight> {
  const typeCounts = types.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const typeSummary = Object.entries(typeCounts).map(([type, count]) => `${type}: ${count}명`).join(", ");

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `우리 반 학생들의 MBTI 분포는 다음과 같아: ${typeSummary}. 이 데이터를 바탕으로 학급 경영 인사이트를 제공해줘.`,
    config: {
      systemInstruction: "너는 초등학교 6학년 담임 선생님들을 돕는 교육 컨설턴트야. 학급의 MBTI 분포를 분석하여 평화롭고 활기찬 학급을 만들기 위한 전략을 세워줘.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          strategy: { type: Type.STRING, description: "학기 초 학급 분위기 조성 전략" },
          seating: { type: Type.STRING, description: "좌석 배치 시 고려할 점" },
          grouping: { type: Type.STRING, description: "모둠 활동 구성 가이드" },
          rules: { type: Type.STRING, description: "학급 규칙 수립 시 반영할 점" }
        },
        required: ["strategy", "seating", "grouping", "rules"]
      }
    }
  });

  try {
    return JSON.parse(response.text || "{}");
  } catch (e) {
    console.error("Failed to parse teacher insight", e);
    throw e;
  }
}
