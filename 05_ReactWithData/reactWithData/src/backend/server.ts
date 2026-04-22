import express from 'express';
import cors from 'cors';
import itemRouters from '../routes/items.ts';

const app = express();

app.use((req, _, next) => { // kontroll meetod, et näha kas sisend üldes jõuab
    console.log(`Päring tuli: ${req.method} ${req.url}`);
    next();
});

app.use(cors());  //
app.use(express.json()); //

app.use('/api/items', itemRouters);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server töötab pordil ${PORT}`));