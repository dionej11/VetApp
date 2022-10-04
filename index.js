const express = require("express"), 
mongoose =require("mongoose"),
app = express(), 
port = process.env.PORT || 3000;
require("dotenv").config();

const userRoutes = require("./routes/users");

/*prefix - middleware*/
app.use('/api', userRoutes);

/* ROUTES */
app.get("/", (req, res) => {
    res.send("Bienvenidas al backend");
})

/*MongoDB conection*/
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.error(error))


/*server listening mood*/
app.listen(port, () => console.log('Servidor escuchando en el puerto ', port));