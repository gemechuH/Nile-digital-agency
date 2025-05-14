import { useState, useEffect } from "react";
import CarouselEffect from "../components/carousel/CarouselEffect";
import styles from "./Home.module.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.homePage}>
      <CarouselEffect />

      <section
        className={`${styles.services} ${isVisible ? styles.visible : ""}`}
      >
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>

        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Digital Excellence</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-code"></i>
              </div>
              <h3>Web Development</h3>
              <p>
                Creating powerful, scalable web solutions that drive business
                growth
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobile Apps</h3>
              <p>
                Innovative mobile applications that engage and delight users
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Digital Marketing</h3>
              <p>
                Strategic campaigns that boost your brand's digital presence
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.stats} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>200+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Expert Team Members</p>
            </div>
            <div className={styles.statItem}>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.process} ${isVisible ? styles.visible : ""}`}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3>Discovery</h3>
              <p>Understanding your vision and goals</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3>Strategy</h3>
              <p>Crafting the perfect digital solution</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3>Implementation</h3>
              <p>Bringing ideas to life with precision</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h3>Launch</h3>
              <p>Delivering excellence to the world</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.cta} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.container}>
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Let's create something extraordinary together</p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      <section className={styles.youtubeSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Latest from Our Channel</h2>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
