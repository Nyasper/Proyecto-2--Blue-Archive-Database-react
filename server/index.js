import Express from "express";
import cors from "cors"
//Configure Express
const app = Express()
const port = process.env.PORT || 3000
import router from "./routes.js";

app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://blue-archive-database.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('Proyecto 2 Backend.')
})

app.use('/api/', router)

app.listen(port, () => {
  console.log(`Servidor Abierto http://localhost:${port}`)
})

import { connect } from "./db/mongo.js";
connect()