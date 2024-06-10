import React from 'react';
import '../styles/projetCards.scss';

function ProjectCard({ image }) {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <img src={image} alt="Project screenshot" className="project-image" />
      </div>
    </div>
  );
}

export default ProjectCard;
