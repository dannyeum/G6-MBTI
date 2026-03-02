import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";

const db = new Database("mbti.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/results", (req, res) => {
    const { name, type } = req.body;
    if (!name || !type) {
      return res.status(400).json({ error: "Name and type are required" });
    }
    const stmt = db.prepare("INSERT INTO results (name, type) VALUES (?, ?)");
    stmt.run(name, type);
    res.json({ success: true });
  });

  app.get("/api/results", (req, res) => {
    const stmt = db.prepare("SELECT * FROM results ORDER BY created_at DESC");
    const results = stmt.all();
    res.json(results);
  });

  app.delete("/api/results", (req, res) => {
    const { ids } = req.body;
    if (ids && Array.isArray(ids)) {
      const stmt = db.prepare(`DELETE FROM results WHERE id IN (${ids.map(() => '?').join(',')})`);
      stmt.run(...ids);
    } else {
      const stmt = db.prepare("DELETE FROM results");
      stmt.run();
    }
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
