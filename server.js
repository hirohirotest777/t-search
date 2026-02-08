// server.js
// Azure Web App (Node.js ~20) 用 最小サンプル
// 仕様:
// ・ボタン1押下時にメッセージを表示するだけ（実処理なし）


import express from "express";
import path from "path";


const app = express();
const PORT = process.env.PORT || 3000;


// 静的ファイル公開
app.use(express.static("public"));


app.listen(PORT, () => {
console.log(`Server started on port ${PORT}`);
});