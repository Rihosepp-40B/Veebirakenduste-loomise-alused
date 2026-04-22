import sql from "mssql";

export const dbConfig: sql.config = {
    user: "TTHK\opilane",
    password: "",
    server: "(localdb)\MSSQLLocalDB",
    //pärast saab juurde kirjutada
};

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => pool)