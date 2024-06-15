import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.contactSection}>
        <h2>Contact Me</h2>
        <form className={styles.contactForm}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        <div className={styles.socialLinks}>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
