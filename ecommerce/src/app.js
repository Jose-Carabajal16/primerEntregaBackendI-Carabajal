import express from 'express';
import productsRouter from './routes/productsRouter.js';
const PORT = 8089;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//Ruta de los productos
app.use("/api/products", productsRouter)

// Ruta para la página de inicio
app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send("Bienvenido a la Home");
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});