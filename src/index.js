import express from "express";
import connectDatabase from "./database/db.js";
import routes from "./routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

connectDatabase()
  .then(() => {
    app.listen(port, () =>
      console.log(
        `Servidor rodando na porta ${port} & banco de dados conectado`
      )
    );
  })
  .catch((error) => console.log(error));
