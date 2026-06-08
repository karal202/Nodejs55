import express from "express";
import rootRouter from "./src/routers/restaurant.router.js";
import { appError } from "./src/common/helpers/appError.helper.js";
const app = express();
app.use(express.json());

//định nghĩa api
app.use("/api", rootRouter);

app.use(appError);

const PORT = 3069;
app.listen(PORT, () => {
  //sau khi server chạy, sẽ tiếp tục thực các logic code bên trong callback
  console.log(`server online at port: ${PORT}`);
});

