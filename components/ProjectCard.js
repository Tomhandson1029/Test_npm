import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default ProjectCard;
