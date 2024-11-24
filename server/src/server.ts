
import express, { Request, Response } from 'express';
const app = express();
import path from "path"

// Middleware for JSON parsing
app.use(express.json());

app.get("/api/hello", (req: Request, res: Response) => {
  console.log(req.method)
  res.json({ message: "Hello, TypeScript!" });
});

// Serve React build
app.use(express.static(path.join(__dirname, '../../client/dist/')));

app.get('*', (req: Request, res: Response) => {
  console.log(req.method)
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
