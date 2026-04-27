import { useState } from "react";
import './item.css'

export default function ItemList ({ items, onDelete, onEdit}: any) {
    const [editId, setEditId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    const handleEditStart = (item: any) => {
        setEditId(item.id);
        setEditText(item.name);
    };

    const handleSave = (id: number) => {
        onEdit(id, editText);
        setEditId(null);
    };

    return (
        <ul className='item-list'>
            {items.map((i: any) => (
                <li key={i.id}>
                    {editId === i.id ? (
                        <>
                            <div><input 
                                value={editText} 
                                onChange={(e) => setEditText(e.target.value)} 
                            /></div>
                            <button onClick={() => handleSave(i.id)}>Salvesta</button>
                            <button onClick={() => setEditId(null)}>Tühista</button>
                        </>
                    ) : (
                        <>
                            <div>{i.name}</div>
                            <button onClick={() => handleEditStart(i)}>Muuda</button>
                            <button onClick={() => onDelete(i.id)}>X</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}