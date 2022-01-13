const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
 // const data = req.body;
  const data ={
    nombre: req.body.nombres,
    apellido: req.body.apellidos,
    correo: req.body.correo,
    curso: req.body.cursos,
    persona: req.body.personas,
    costo: req.body.costo ,
    descuento: req.body.descuento ,
    valor: req.body.valor
  }

  await User.add({ data });
  res.send({ msg: "User Added" });
});


app.listen(4000, () => console.log("Up & RUnning *4000"));
