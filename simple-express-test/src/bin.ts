import { app } from "./index";

//tests will never import bin.ts,

app.listen(3000, () => {
  console.log("app is listening on the port 3000");
});
