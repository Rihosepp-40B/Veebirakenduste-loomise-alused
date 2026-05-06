import { } from 'react';
import './App.css';
import PlanetsList from './views/PlanetsList';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PlanetsList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;