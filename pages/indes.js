import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Hello, I'm [Your Name]</h1>
          <p className={styles.subtitle}>Data Scientist | Machine Learning Enthusiast | Problem Solver</p>
          <button className={styles.ctaButton}>View Projects</button>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default HomePage;
