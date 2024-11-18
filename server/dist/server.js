"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
// Middleware for JSON parsing
app.use(express_1.default.json());
app.get("/api/hello", (req, res) => {
    console.log(req.method);
    res.json({ message: "Hello, TypeScript!" });
});
// Serve React build
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/dist')));
app.get('*', (req, res) => {
    console.log(req.method);
    res.sendFile(path_1.default.join(__dirname, '../../client/dist', 'index.html'));
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
