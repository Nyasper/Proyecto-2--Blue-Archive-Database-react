import Express from "express";
import cors from "cors"

//Configure Express
const app = Express()
const port = process.env.PORT || 3000
import router from "./routes.js";

app.use(cors())
app.use('/api/',router)

app.listen(port,()=>{
  console.log(`Servidor Abierto http://localhost:${port}`)
})

import { connect } from "./db/mongo.js";
connect()