import sql from "mssql";
// kooli arvutis palju piiranguid, seega ei pruugi see toimida
export const dbConfig: sql.config = {
    user: "Koolit66",  // MSSQL database kasutaja, siia ei saa panna WIN login nime
    password: "",  // kasutaja parool
    server: "localhost",  // vajadusel täpsustatud serveri nimi
    database: "ReactData",  // peab olema database tehtud ja ka tabel
    options: {
        encrypt: true,  // ilma selleta ei lae serverit ära
        trustServerCertificate: true,
    },
    // authentication: {  // sellega katsetada koolis, selle abil laseb windows loginiga sisse, kui see on olemas, siis see overrideb ülemise
    //     type: "ntlm",
    //     options: {
    //         domain: "Arvutinimi", // Arvuti nimi on vajalik punkt ja tühik ei tööta
    //         userName: "Kasutaja", // Arvuti kasutajanimi
    //         password: "parool_siia" // Vajalik on parool kui win kasutajal on login
    //     }
    // }
};

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => pool)