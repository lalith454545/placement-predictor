import React from "react";

function About() {
    return (
        <div className="card about-card">
            <h1>About Me</h1>

            <div className="profile-photo">
                <img src="/img.png" alt="Lalith Srinandan" />
            </div>

            <div className="about-content">
                <p>
                    Hi, I'm <strong>Lalith Srinandan</strong>, a B.Tech student at Keshav Memorial Institute
                    of Technology with a growing interest in Artificial Intelligence and Machine Learning.
                    I enjoy exploring how intelligent systems can be built to solve real-world problems.
                </p>

                <p>
                    This project reflects my curiosity in understanding how Artificial Neural Networks work
                    in practice. Using PyTorch, I built a neural network model that predicts the probability
                    of a student's placement based on academic and skill-related factors. I then deployed the
                    model through a backend API using FastAPI and created an interactive user interface with React.
                </p>

                <p>
                    Through this project, I explored the complete workflow of an AI application — from data
                    preprocessing and model training to building a full-stack web interface that allows users
                    to interact with the model in real time.
                </p>

                <p>
                    I am excited to continue learning more about AI systems, machine learning models, and
                    real-world AI applications, and I enjoy building projects that combine intelligent
                    algorithms with modern software development.
                </p>
            </div>
        </div>
    );
}

export default About;
