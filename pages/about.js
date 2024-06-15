import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.aboutSection}>
        <h2>About Me</h2>
        <p>[Your personal story and passion for data science]</p>
        <h3>Skills & Expertise</h3>
        <ul className={styles.skillsList}>
          <li>Python</li>
          <li>R</li>
          <li>Machine Learning</li>
          <li>Data Visualization</li>
        </ul>
        <h3>Education & Certifications</h3>
        <ul className={styles.educationList}>
          <li>Bachelor's in Data Science, [University Name]</li>
          <li>Certified Data Scientist, [Certification Authority]</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
