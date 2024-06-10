import React from 'react';
import ProjectCard from './ProjetCards';
import '../styles/projectGallery.scss';
import '../styles/projetCards.scss';

function ProjectGallery() {

  return (
    <div className={`project-gallery`}>
      <div className='projects-slide slide1'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className='projects-slide slide2'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectGallery;

