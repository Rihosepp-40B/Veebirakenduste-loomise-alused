import express from 'express';
import cors from 'cors';
import itemRouters from '../routes/items.ts';

const app = express();

app.use((req, _, next) => { // kontroll meetod, et näha kas sisend üldse jõuab serverisse
    console.log(`Päring tuli: ${req.method} ${req.url}`);
    next();
});

app.use(cors());  // kuna server ja react jooksevad erinevatel portidel, siis veebilehitseja blokeerib päringuid turvalisuse pärast. See rida ütleb serverile, et on OK lubada teistel rakendustel päringuid saata.
app.use(express.json()); // see rida teeb võimalikuks kasutada req.body.name. See muudab teksti javascript objektiks.

app.use('/api/items', itemRouters); // see rida suunab päringud mille aadressi alguses on /api/items itemRouters failile, et teha vajalik toiming.

const PORT = 4000;  // määrab port numbri serveril
app.listen(PORT, () => console.log(`Server töötab pordil ${PORT}`));  // see annab info konsooli serveri käivitamisel.