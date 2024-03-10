import app from "../initServer/server";
import userRouter from "../routers/userRouter";

app.use('/api', userRouter)

app.listen(3000, () => {
  console.log(`Server is running on port 3000`)
})