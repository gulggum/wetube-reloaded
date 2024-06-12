// 데이터베이스와 Video를 import 해주고 우리 애플리케이션을 작동시켜준다
// 필요한  모든 것들을  import 시키는 역할담당
import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";
// ㄴ> 1. init.js는 app을 작동시킬수 있게되었다
//   2. package.json에서 script.노드몬에 src/init.js로 변경해준다 연결시켜주기)

const PORT = 4000;

const handleListening = () =>
  console.log(`Server listening on port 4000 http://localhost:${PORT} ❤️`);

app.listen(PORT, handleListening);
