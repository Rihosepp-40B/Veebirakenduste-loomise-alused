import { } from 'react';
import './App.css';
import PlanetsList from './views/PlanetsList';
import PlanetsCreate from './views/PlanetsCreate'
import { Routes, Route, Navigate, HashRouter } from "react-router-dom"

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/planets" replace />} />

                <Route path="/planets" element={<PlanetsList />} />
                <Route path="/planets/create" element={<PlanetsCreate />} />
            </Routes>
        </HashRouter>
    )
}

export default App;