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
                <h1>Planet Delete</h1>
                <p style={{ color: 'crimson' }}>Error: {error}</p>

                <div style={{ display: "flex", gap: 12 }}>
                    <Link to="/planets">Back to list</Link>
                </div>
            </div>
        )
    }

    return (
        <div style={{ padding: 20, maxWidth: 520, margin: "0 auto" }}>
            <h2>Delete Planet</h2>

            {error && <p style={{ color: "crimson" }}>{error}</p>}

            {!planet ? (
                <p>Planet not found</p>
            ) : (
                <>
                    <p>Are you sure you want to delete:</p>

                    <div style={{ border: "1px solid #ddd", padding: 12, marginBottom: 16 }}>
                        <b>{planet.name}</b><br />
                        {planet.mass ?? "-"}
                    </div>

                    <div style={{ display: "flex", gap: 10 }}>
                        <button
                            type="button"
                            className="danger"
                            onClick={onDelete}
                            disabled={deleting}
                            style={{ background: "#c62828", color: "white", padding: "6px 12px" }}
                        >
                            {deleting ? "Deleting..." : "Yes, delete"}
                        </button>

                        <button type="button" className="secondary" onClick={() => navigate("/planets")} disabled={deleting}>
                            Cancel
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}