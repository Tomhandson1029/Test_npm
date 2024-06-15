import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Brief description of project 1.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      link: "https://github.com/yourusername/project1"
    },
    // Add more projects as needed
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.projectsSection}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
