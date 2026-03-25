var user = {
    id: "ads",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "London"
    }
};
//omit kasutamine tähendab properti eemaldamist User typest
//kui consol logi kirjutada user.id, siis annab veateate kuna Omit väljastab selle
function createUser(user) {
    console.log(user.address, user.name, user.age);
}
//kui kasutan Partial-t, siis kõik muutujad on valikulised
function updateUser(user) {
}
createUser({ name: "Ironman", age: 567, address: { street: "asd", city: "asdcity" } });
