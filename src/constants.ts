import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    dimension: 'EI',
    text: '쉬는 시간에 나는 보통 무엇을 하나요?',
    options: [
      { text: '친구들과 모여서 시끌벅적하게 이야기하거나 놀아요.', value: 'E' },
      { text: '내 자리에서 조용히 책을 읽거나 혼자만의 시간을 가져요.', value: 'I' }
    ]
  },
  {
    id: 2,
    dimension: 'SN',
    text: '새로운 과제를 받았을 때 나는 어떤 생각을 하나요?',
    options: [
      { text: '선생님이 설명해주신 순서대로 차근차근 시작해요.', value: 'S' },
      { text: '이 과제를 더 재미있고 새롭게 할 방법이 없을까 고민해요.', value: 'N' }
    ]
  },
  {
    id: 3,
    dimension: 'TF',
    text: '친구가 속상한 일이 있다고 말할 때 나는 어떻게 반응하나요?',
    options: [
      { text: '왜 그런 일이 생겼는지 물어보고 해결 방법을 같이 찾아요.', value: 'T' },
      { text: '친구가 얼마나 속상했을지 공감해주고 위로해줘요.', value: 'F' }
    ]
  },
  {
    id: 4,
    dimension: 'JP',
    text: '준비물을 챙길 때 나는 어떤 편인가요?',
    options: [
      { text: '전날 밤에 미리 알림장을 보고 꼼꼼하게 챙겨둬요.', value: 'J' },
      { text: '아침에 나가기 직전에 생각나는 대로 얼른 챙겨요.', value: 'P' }
    ]
  },
  {
    id: 5,
    dimension: 'EI',
    text: '모둠 활동을 할 때 나는 어떤 역할을 좋아하나요?',
    options: [
      { text: '친구들에게 의견을 먼저 제안하고 분위기를 이끄는 역할', value: 'E' },
      { text: '친구들의 의견을 잘 듣고 내 맡은 일을 묵묵히 하는 역할', value: 'I' }
    ]
  },
  {
    id: 6,
    dimension: 'SN',
    text: '미래의 내 모습을 상상할 때 나는 어떤가요?',
    options: [
      { text: '지금 내가 잘하는 것들을 바탕으로 현실적인 계획을 세워요.', value: 'S' },
      { text: '아주 먼 미래에 내가 하고 싶은 멋지고 다양한 일들을 꿈꿔요.', value: 'N' }
    ]
  },
  {
    id: 7,
    dimension: 'TF',
    text: '모둠 과제 결과가 안 좋을 때 나는 어떤 생각이 먼저 드나요?',
    options: [
      { text: '어디서 실수가 있었는지, 무엇을 고쳐야 할지 분석해요.', value: 'T' },
      { text: '열심히 한 친구들이 실망하지 않았을까 걱정돼요.', value: 'F' }
    ]
  },
  {
    id: 8,
    dimension: 'JP',
    text: '방학 계획을 세울 때 나는 어떻게 하나요?',
    options: [
      { text: '시간표를 짜서 규칙적으로 생활하려고 노력해요.', value: 'J' },
      { text: '그날그날 하고 싶은 일을 하면서 자유롭게 지내요.', value: 'P' }
    ]
  },
  {
    id: 9,
    dimension: 'EI',
    text: '처음 보는 친구가 전학 왔을 때 나는 어떻게 하나요?',
    options: [
      { text: '먼저 다가가서 말을 걸고 학교를 소개해줘요.', value: 'E' },
      { text: '다른 친구가 먼저 다가가는 걸 지켜보다가 천천히 친해져요.', value: 'I' }
    ]
  },
  {
    id: 10,
    dimension: 'SN',
    text: '수업 시간에 선생님이 비유적인 표현을 쓰시면 나는 어떤가요?',
    options: [
      { text: '말씀하신 그대로의 의미를 이해하려고 해요.', value: 'S' },
      { text: '그 표현 속에 담긴 숨은 뜻이나 다른 상황을 상상해봐요.', value: 'N' }
    ]
  },
  {
    id: 11,
    dimension: 'TF',
    text: '친구가 규칙을 어겼을 때 나는 어떻게 생각하나요?',
    options: [
      { text: '규칙은 모두가 지켜야 하는 것이니 잘못됐다고 말해줘요.', value: 'T' },
      { text: '친구가 그럴 수밖에 없었던 사정이 있었는지 먼저 생각해요.', value: 'F' }
    ]
  },
  {
    id: 12,
    dimension: 'JP',
    text: '책상을 정리할 때 나는 어떤 스타일인가요?',
    options: [
      { text: '항상 물건들이 제자리에 있고 깔끔하게 정리되어 있어요.', value: 'J' },
      { text: '조금 어질러져 있어도 내가 필요한 건 금방 찾을 수 있어요.', value: 'P' }
    ]
  },
  {
    id: 13,
    dimension: 'EI',
    text: '발표 수업을 할 때 나는 어떤 기분이 드나요?',
    options: [
      { text: '많은 친구 앞에서 내 생각을 말하는 게 즐겁고 신나요.', value: 'E' },
      { text: '주목받는 게 조금 쑥스럽고 긴장되지만 열심히 준비해요.', value: 'I' }
    ]
  },
  {
    id: 14,
    dimension: 'SN',
    text: '일기를 쓸 때 나는 주로 어떤 내용을 적나요?',
    options: [
      { text: '오늘 있었던 일들을 시간 순서대로 자세히 기록해요.', value: 'S' },
      { text: '오늘 느꼈던 감정이나 문득 든 생각들을 자유롭게 적어요.', value: 'N' }
    ]
  },
  {
    id: 15,
    dimension: 'TF',
    text: '칭찬을 들을 때 어떤 말이 더 기분 좋은가요?',
    options: [
      { text: '\"너 정말 똑똑하다! 문제를 아주 잘 풀었어.\" 라는 말', value: 'T' },
      { text: '\"너 정말 착하다! 친구를 도와주는 마음이 예뻐.\" 라는 말', value: 'F' }
    ]
  },
  {
    id: 16,
    dimension: 'JP',
    text: '숙제를 할 때 나는 어떤 방식으로 하나요?',
    options: [
      { text: '미리미리 계획해서 여유 있게 끝내요.', value: 'J' },
      { text: '미루다가 마감 시간이 다 되어서 집중해서 끝내요.', value: 'P' }
    ]
  },
  {
    id: 17,
    dimension: 'EI',
    text: '주말에 집에만 있으면 나는 어떤 기분이 드나요?',
    options: [
      { text: '조금 답답하고 친구들을 만나서 놀고 싶어져요.', value: 'E' },
      { text: '집에서 푹 쉬면서 에너지를 충전하는 게 행복해요.', value: 'I' }
    ]
  },
  {
    id: 18,
    dimension: 'SN',
    text: '만들기 수업을 할 때 나는 어떻게 하나요?',
    options: [
      { text: '설명서에 나온 예시 작품과 비슷하게 완성도 있게 만들어요.', value: 'S' },
      { text: '나만의 독특한 아이디어를 넣어서 세상에 하나뿐인 작품을 만들어요.', value: 'N' }
    ]
  },
  {
    id: 19,
    dimension: 'TF',
    text: '게임을 할 때 나는 무엇을 더 중요하게 생각하나요?',
    options: [
      { text: '전략을 잘 짜서 정정당당하게 이기는 것', value: 'T' },
      { text: '친구들과 웃고 떠들며 즐겁게 시간을 보내는 것', value: 'F' }
    ]
  },
  {
    id: 20,
    dimension: 'JP',
    text: '준비물이 갑자기 바뀌었을 때 나는 어떤가요?',
    options: [
      { text: '계획이 틀어져서 조금 당황스럽고 걱정돼요.', value: 'J' },
      { text: '그럴 수도 있지! 새로운 상황에 맞춰서 금방 적응해요.', value: 'P' }
    ]
  }
];
