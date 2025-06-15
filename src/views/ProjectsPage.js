import React, { useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import  './Stylesheet/ProjectsPage.css';

const ProjectsPage = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const handleProjectClick = (id) => {
        // Przejście np. do szczegółów projektu
        console.log('Project clicked:', id);
        // Można dodać: navigate(`/projects/${id}`);
    };




return (
    <div className="container">
        <div className="top-bar">
            <input className="search-box" type="text" placeholder="Search"/>
            <div className="user-info">
                <span>Moni Roy<br/><small>Admin</small></span>
                <img src="profile.jpg" alt="User"/>
            </div>
        </div>

        <div className="grid-container">
            {projects.map(project => (
                <div key={project.id} className="project-card" onClick={() => handleProjectClick(project.id)}>
                    <h3>{project.name}</h3>
                    <div className="project-icon">🖼️</div>
                </div>
            ))}


        </div>

        <div class="pagination">
            <span class="page-number">&lt;</span>
            <span class="page-number">1</span>
            <span class="page-number active">2</span>
            <span class="page-number">3</span>
            <span class="page-number">...</span>
            <span class="page-number">8</span>
            <span class="page-number">&gt;</span>
        </div>
    </div>
);



}

export default ProjectsPage;