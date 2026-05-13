import { } from 'react';
import './App.css';
import PlanetsList from './views/PlanetsList';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/planets" replace />} />

                <Route path="/planets" element={<PlanetsList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;