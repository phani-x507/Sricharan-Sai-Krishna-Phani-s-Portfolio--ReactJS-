import React from "react";

export default function Projects() {

    return (
        <div className="container projectBody border my-4 px-3">
            <center><h2>Projects</h2></center>

            {/* Project Details Container */}
            <div className="container-flex floatLeft w-75 border mt-3 d-flex borders p-3 t">


                <div className="container projectDetails ">
                    <div className="container mobProjectImg"><img className="project_img" src="pana.webp" alt="" /></div>
                    <h3>Offline LLMs for Low-Spec Devices: A Study on Efficiency and Usability</h3>
                    <p>The rapid advancements in Offline Large Language Models (LLMs) have paved the way for efficient and privacy-focused AI applications. This project presents a comprehensive benchmarking and evaluation framework for Masked Language Models (MLMs) and Causal Language Models (CLMs) running entirely offline.</p>
                    <button className="homeLeftDivButton floatLeft ">Github <i class="bi bi-github"></i></button>
                </div>
                <img className="project_img" src="pana.webp" alt="" />
            </div>
            <div className="floatNone"></div>
            {/* Project Details Container End */}


            {/* Project Details Container */}
            <div className="container-flex floatRight w-75 border mt-3 d-flex borders p-3 t">
                <img className="project_img" src="pana.webp" alt="" />

                <div className="container projectDetails ">
                    <h3>Interactive Agent Reinforced with Emotion Enabled Facial Authentication</h3>
                    <p>This project integrates facial authentication with emotion detection to enhance user interactions. It combines JavaScript, Python, HTML, and CSS to build a system that identifies users based on their facial expressions. This innovation has applications in security, accessibility, and personalized AI interactions.</p>
                    <button className="homeLeftDivButton floatRight ">Github <i class="bi bi-github"></i></button>
                </div>
            </div>
            <div className="floatNone"></div>
            {/* Project Details Container End */}

            {/* Project Details Container */}
            <div className="container-flex floatLeft w-75 border mt-3 d-flex borders p-3 t">


                <div className="container projectDetails ">
                    <h3>Spotify Data Analysis</h3>
                    <p>This project, Minimal Spotify Data Analysis using Flask, provides basic insights into Spotify's streaming data with a simple UI. It features an index page showcasing the top 10 streamed songs of 2023, leveraging a dataset from Kaggle. The application includes univariate analysis, relational plots, and covariance metrics to explore trends. Built using HTML, Python, and CSS, it operates without requiring database integration, making it lightweight. The tool enables quick data visualization, offering an accessible way to analyze streaming trends.</p>
                    <button className="homeLeftDivButton floatLeft ">Github <i class="bi bi-github"></i></button>
                </div>
                <img className="project_img" src="pana.webp" alt="" />
            </div>
            <div className="floatNone"></div>
            {/* Project Details Container End */}


            {/* Project Details Container */}
            <div className="container-flex floatRight w-75 border mt-3 d-flex borders p-3 t">
                <img className="project_img" src="pana.webp" alt="" />

                <div className="container projectDetails ">
                    <h3>User-Facing Chat-Style RAG Agentic System</h3>
                    <p>This project is developed as part of an assignment for the AI Engineer position at Spiderweb Technologies. It features a User-Facing Chat-Style RAG Agentic System utilizing asynchronous Python programming, FastAPI, and a local LLM integrated with a daily-updated MySQL database from Federal Register Dataset. The system efficiently handles both chat-style interactions and database queries.</p>
                    <button className="homeLeftDivButton floatRight ">Github <i class="bi bi-github"></i></button>
                </div>
            </div>
            <div className="floatNone"></div>
            {/* Project Details Container End */}

            {/* Project Details Container */}
            <div className="container-flex floatLeft w-75 border mt-3 d-flex borders p-3 t">


                <div className="container projectDetails ">
                    <h3>News Full Stack Application using CodeIgniter</h3>
                    <p>News Full Stack Application using CodeIgniter, is a news platform with an admin panel for managing news articles. It is built using PHP, CSS, JavaScript, and Smarty, utilizing MySQL for database management. The application provides a structured news interface for users while enabling administrators to add, update, and manage news entries efficiently. Designed as a private repository, it includes various components such as templates, database files, and system configurations. The MIT-licensed project leverages CodeIgniter to streamline development and enhance functionality.</p>
                    <button className="homeLeftDivButton floatLeft">Github <i class="bi bi-github"></i></button>
                </div>
                <img className="project_img" src="pana.webp" alt="" />
            </div>
            <div className="floatNone"></div>
            {/* Project Details Container End */}


            {/* Project Details Container */}
            <div className="container-flex floatRight w-75 border mt-3 d-flex borders p-3 t">
                <img className="project_img" src="pana.webp" alt="" />

                <div className="container projectDetails ">
                    <h3>Student Identification and Reporting System
                    </h3>
                    <p>Student Identification and Reporting System, uses facial recognition for secure student authentication and reporting. Built with JavaScript, Python, HTML, and CSS, it enhances efficiency in student tracking and administrative workflows. The system streamlines identity verification and reporting for educational institutions.</p>
                    
                    <button className="homeLeftDivButton floatRight ">Github <i class="bi bi-github"></i></button>
                </div>
            </div>
            <div className="floatNone"></div>
            {/* Project Details Container End */}

            {/* Project Details Container */}
            <div className="container-flex floatLeft w-75 border mt-3 d-flex borders p-3 t">


                <div className="container projectDetails ">
                    <h3>Transaction Management System with Face Recognition</h3>
                    <p>This project, Transaction Management System with Face Recognition, integrates financial transactions with facial authentication using the Deep ID Face Verification Algorithm. Built with PHP, HTML, CSS, Python, and JavaScript, it ensures secure access through face verification. The system provides a structured approach to managing transactions. It utilizes Haar cascade classifiers for facial recognition, improving accuracy in identity verification.</p>
                    <button className="homeLeftDivButton floatLeft ">Github <i class="bi bi-github"></i></button>
                </div>
                <img className="project_img" src="pana.webp" alt="" />
            </div>
            <div className="floatNone"></div>
            {/* Project Details Container End */}

        </div>

    );
}