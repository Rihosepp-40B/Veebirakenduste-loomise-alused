import sql from "mssql";

export const dbConfig: sql.config = {
    user: "sa",  // serveri kasutaja
    password: "",  // kasutaja parool
    server: "localhost",
    database: "ReactData",  // peab olema database tehtud ja ka tabel
    options: {
        encrypt: false,  // ilma selleta ei lae serverit ära
    }
};

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => pool)