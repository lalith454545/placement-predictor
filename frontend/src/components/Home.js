import React, { useState } from "react";

function Home() {

    const [cgpa, setCgpa] = useState("");
    const [communication, setCommunication] = useState("");
    const [internship, setInternship] = useState("");
    const [projects, setProjects] = useState("");
    const [dsa, setDsa] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateInputs = () => {
        const newErrors = {};

        const fields = {
            cgpa: parseFloat(cgpa),
            communication: parseFloat(communication),
            internship: parseFloat(internship),
            projects: parseFloat(projects),
            dsa: parseFloat(dsa)
        };

        Object.keys(fields).forEach(field => {
            const value = fields[field];
            if (isNaN(value) || value < 0 || value > 10) {
                newErrors[field] = "Value must be between 0 and 10";
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const predict = async () => {

        if (!validateInputs()) {
            setResult("❌ Please fix the errors above");
            return;
        }

        setLoading(true);
        setResult("");

        const data = {
            cgpa: parseFloat(cgpa),
            communication: parseFloat(communication),
            internship: parseFloat(internship),
            projects: parseFloat(projects),
            dsa: parseFloat(dsa)
        };

        try {

            const response = await fetch("http://127.0.0.1:8000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            const probability = (result.placement_probability * 100).toFixed(2);

            if (probability > 50) {
                setResult("🎉 High chance of placement (" + probability + "%)");
            } else {
                setResult("⚠️ Low chance of placement (" + probability + "%)");
            }

        } catch (error) {
            setResult("Error connecting to API");
        }

        setLoading(false);
    };

    return (
        <div className="card">

            <h1>AI Placement Predictor</h1>

            <div className="input-group">
                <input
                    type="number"
                    placeholder="CGPA (0-10)"
                    value={cgpa}
                    onChange={(e) => setCgpa(e.target.value)}
                    className={errors.cgpa ? "input-error" : ""}
                    min="0"
                    max="10"
                    step="0.1"
                />
                {errors.cgpa && <span className="error-text">{errors.cgpa}</span>}
            </div>

            <div className="input-group">
                <input
                    type="number"
                    placeholder="Communication (0-10)"
                    value={communication}
                    onChange={(e) => setCommunication(e.target.value)}
                    className={errors.communication ? "input-error" : ""}
                    min="0"
                    max="10"
                    step="0.1"
                />
                {errors.communication && <span className="error-text">{errors.communication}</span>}
            </div>

            <div className="input-group">
                <input
                    type="number"
                    placeholder="Internship (0-10)"
                    value={internship}
                    onChange={(e) => setInternship(e.target.value)}
                    className={errors.internship ? "input-error" : ""}
                    min="0"
                    max="10"
                    step="0.1"
                />
                {errors.internship && <span className="error-text">{errors.internship}</span>}
            </div>

            <div className="input-group">
                <input
                    type="number"
                    placeholder="Projects (0-10)"
                    value={projects}
                    onChange={(e) => setProjects(e.target.value)}
                    className={errors.projects ? "input-error" : ""}
                    min="0"
                    max="10"
                    step="0.1"
                />
                {errors.projects && <span className="error-text">{errors.projects}</span>}
            </div>

            <div className="input-group">
                <input
                    type="number"
                    placeholder="DSA (0-10)"
                    value={dsa}
                    onChange={(e) => setDsa(e.target.value)}
                    className={errors.dsa ? "input-error" : ""}
                    min="0"
                    max="10"
                    step="0.1"
                />
                {errors.dsa && <span className="error-text">{errors.dsa}</span>}
            </div>

            <button onClick={predict}>
                {loading ? "Predicting..." : "Predict Placement"}
            </button>

            <div className="result">{result}</div>

        </div>
    );
}

export default Home;
