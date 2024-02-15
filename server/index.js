import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from 'mercadopago';


const client = new MercadoPagoConfig({
    accessToken: 'APP_USR-5739005951941838-021013-04f0b9b4bdc5910a0da197701946a6bc-220445932',
});

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Origin",
      "React app URL"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send('¡Hola desde el servidor!');
});

app.post("/create_preference", async (req, res) => {
    try {
        const { items } = req.body;

        const preferenceItems = items.map(item => ({
            title: item.title,
            description: item.description,
            quantity: Number(item.quantity), // Asegúrate de que item.quantity sea un número
            unit_price:  Number(item.unit_price),
            currency_id: "ARS",
            picture_url: item.picture_url,
        }));

        const body = {
            items: preferenceItems,
            back_urls: {
                success: "http://www.csmayoristas.com.ar/pagoconfirmado",
                failure: "http://www.csmayoristas.com.ar/pagoconerror",
                pendings: "http://www.csmayoristas.com.ar/pagoenproceso",
            },
            auto_return: "approved",
        }

        const preference = new Preference(client);
        const result = await preference.create({ body });

        res.json({
            id: result.id,
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({
            error: "Error al crear la preferencia",
        });
    }
});


app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
