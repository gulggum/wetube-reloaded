import mongoose from "mongoose";
// 데이터베이스에 연결되었고

mongoose.connect(process.env.DB_URL);
// 몽구스가 connection에 대한 엑세스를 주었다
// 서버와 database 서버의 사이를 현재 connection에 엑세스 할수 있었다.

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error");
db.on("error", handleError);
db.once("open", handleOpen);

// 파일(db.js) 자체를 import해줘야 최종 연결된다!
