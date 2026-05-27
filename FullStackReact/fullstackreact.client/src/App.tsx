import { } from 'react';
import './App.css';
import PlanetsList from './views/PlanetsList';
import PlanetsCreate from './views/PlanetsCreate';
import PlanetsDetail from './views/PlanetsDetail';
import PlanetsEdit from './views/PlanetsEdit';
import PlanetDelete from './views/PlanetDelete';
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/planets" replace />} />

                <Route path="/planets" element={<PlanetsList />} />
                <Route path="/planets/create" element={<PlanetsCreate />} />
                <Route path="/planets/:planetsId" element={<PlanetsDetail />} />
                <Route path="/planets/:planetsId/edit" element={<PlanetsEdit />} />
                <Route path="/planets/:planetsId/delete" element={<PlanetDelete />} />
            </Routes>
        </HashRouter>
    )
}

export default App;