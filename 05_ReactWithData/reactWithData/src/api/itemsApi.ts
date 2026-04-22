import axios from "axios";
// lihtsustab HTTP päringuid, pakub paremat sünaktsit 
// veakäsitlus on olemas

const API = "http://localhost:4000/api/items";

export const fetchItems = () => axios.get(API);
export const createItem = (name: string) => axios.post(API, { name });
export const deleteItem = (id: number) => axios.delete(`${API}/${id}`);