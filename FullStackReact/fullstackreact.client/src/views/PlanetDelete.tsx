import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import type { Planets } from '../types/planets'

export default function PlanetDelete() {
    const { planetsId } = useParams<{ planetsId: string }>();
    const navigate = useNavigate();

    const [planet, setPlanet] = useState<Planets | null>(null);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState<string| null > (null); 

    useEffect(() => {
        const load = async () => {
            if (!planetsId) {
                setError("No planet id provided");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const res = await fetch(`/api/Planets/${encodeURIComponent(planetsId)}`);
                if (!res.ok) throw new Error(`Faild to load planet (${res.status})`);

                const data: Planets = await res.json();
                setPlanet(data);

            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load planet");
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [planetsId]);

    const onDelete = async () => {
        if (!planetsId) return;

        try {
            setDeleting(true);
            setError(null);

            const res = await fetch(`/api/Planets/${encodeURIComponent(planetsId)}`, { method: "DELETE" });
            if (!res.ok) throw new Error(`Delete failed (${res.status})`);

            navigate("/planets");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to delete");
        } finally {
            setDeleting(false);
        };
    }

    if (loading) return <div style={{ padding: "20px" }}>Loading...</div>
    if (error) {
        return (
            <div style={{ padding: 20 }}>
                <h1>Planets Detail</h1>
                <p style={{ color: 'crimson' }}>Error: {error}</p>

                <div style={{ display: "flex", gap: 12 }}>
                    <Link to="/planets">Back to list</Link>
                </div>
            </div>
        )
    }

    return (
        <div style={{ padding: 20, maxWidth: 720, margin: "0 auto" }}>
            <h1>Planet Detail</h1>

            <table border={1} cellPadding={8} cellSpacing={0} style={{ width: "100%", marginTop: 10 }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: "left", width: 200 }}>ID</th>
                        <td>{planet.planetsId}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: "left", width: 200 }}>Name</th>
                        <td>{planet.name}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: "left", width: 200 }}>Description</th>
                        <td>{planet.description}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: "left", width: 200 }}>Type</th>
                        <td>{planet.type}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: "left", width: 200 }}>Mass</th>
                        <td>{planet.mass}</td>
                    </tr>
                </tbody>
            </table>
            <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
                <button className="danger" type="button" disabled={deleting} onClick={() => onDelete()}>
                    {deleting ? "Deleting..." : "Press to delete planet"}
                </button>
                <button type="button" className="success" onClick={() => navigate(-1)}>
                    back
                </button>
            </div>
        </div>
    )
}