import { useState } from 'react'
import './App.css'
import ToDoItem from './ToDoItem'

type ToDo = {
  id: number;
  text: string;
  completed: boolean;
}

//REACT.FC on funktsioon, mis tagastab React kompondendi
//See on tüübi määratlus, mis võimaldab meil defineerida funktsionaalset komponenti Reactis

const App: React.FC = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]); //
  const [newToDo, setNewToDo] = useState('');
  //Mis on useState?
  //See on React hook, mis võimaldab meil lisada komponentidele olekut.
  //See tagastab massiivi, kus esimene element on praegune olek ja teine
  //element on funktsioon, mida saab kasutada oleku värskendamiseks.

  const addToDo = () => {
    if (!newToDo.trim()) return;  //Ignore empty tasks
    setToDos([...toDos, { id: Date.now(), text: newToDo.trim(), completed: false }]);
    // Date.now() annab meile unikaalse ID, mis põhineb praegusest ajast.
    // ...toDos tähendab, et me võtame olemasolevad ülesanded ja lisame uue ülesande massiivi lõppu
    // newToDo.trim() eemaldab tühikud teksti algusest ja lõpust, et vältida tühjade ülesannete lisamist.
    // completed: false tähendab, et uus ülesanne on algselt lõpetamata.
    setNewToDo('');
  };
    // Pärast uue ülesande lisamist tühjemdame sisendvälja, et kasutaja saaks kohe uue ülesande lisada.
    const toggleToDo = (id: number) => {
      // toggleToDo funktsioon võtab ülesande ID ja muudab selle completed oleku vastupidiseks.
      setToDos(toDos.map(toDo =>  // toDos.map() - käib läbi kõik järjendi toDos järjendi elemendid, tagastab uue järjendi (ei muuda originaali).
      // toDo - on elemnet järjendis mis võetakse ja tehakse midagi (=>).
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo  // toDo.id - võtab elemendi id ja võrdleb (===) otsitava väärtusega (id)
        // ? - lühike if eelnevale loogikale väljastab juhul kui tõene või (:) kui väär tulemused.
        // ... - võta kõik väärtused (toDo) ja pane siia. complete: - on muutuja/väli. ! - eitus, pöörab elemendi muutuja(boolean) ümber.
        // Sulgudes, tuuakse kaks korda muutuja completed välja (1. element toDo'ga, 2. completed:) viimane muudatus/väärtus rakendatakse (ehk siis peale koma on muuda / lisa esimesele osale muutuja väärtusega(vaikimisi tõde))
      ));
    };

    const deleteToDo = (id: number) => {
      // deleteToDo funktsioon võtab ülesande ID ja eemaldab selle toDos massiivist.
      // toDos.filter() loob uue massiivi
      setToDos(toDos.filter(toDo => toDo.id !== id)); // tagastab uude nimekirja need elemendid, mille id ei kutsutud välja
    };

//function App() {


  return (
    <div className="app">
      <h1>To-Do list</h1>
      {/* To-Do List UI goes here */ }
      <div className="input-row">
        <input
          type="text"
          value={newToDo}
          onChange={e => setNewToDo(e.target.value)}
          placeholder="Add a new task"
          onKeyDown={e => e.key === 'Enter' && addToDo()}
        />
        <button onClick={addToDo}>Add</button>
      </div>
      <ul className='todo-list'>
        {toDos.map(toDo => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
            />
        ))}
      </ul>
    </div>
  );
};


export default App
