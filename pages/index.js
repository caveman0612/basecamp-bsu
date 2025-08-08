// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-animate]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleContactClick = (type) => {
    const message = type === 'email' ? 'Opening email client' : 'Initiating phone call';
    // You could use a toast notification library here
    console.log(message);
  };

  const skipToMain = (e) => {
    e.preventDefault();
    document.getElementById('main-content')?.focus();
  };

  return (
    <>
      <Head>
        <title>BaseCamp - Outdoor Resilience Coaching for BSU Students</title>
        <meta name="description" content="Free outdoor resilience coaching program for Bemidji State University students. Build resilience, reduce stress, and connect with nature through individual and group sessions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <a 
          href="#main-content" 
          className={styles.skipLink}
          onClick={skipToMain}
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        
        <header className={styles.header} role="banner">
          <div className={styles.headerBg} aria-hidden="true"></div>
          <div className={styles.containerInner}>
            <div className={styles.heroContent}>
              <div className={styles.logoSection}>
                <h1 className={styles.mainTitle}>BASECAMP</h1>
                <p className={styles.subtitle}>OUTDOOR RESILIENCE COACHING FOR BSU STUDENTS</p>
              </div>
              
              {/* <div className={styles.mountainIllustration}>
                <Image
                  src="../media/mountain-landscape.png"
                  alt="Mountain landscape with winding trail through pine trees"
                  width={300}
                  height={200}
                  className={styles.mountainImg}
                  priority
                />
              </div> */}
            </div>
          </div>
        </header>
        
        <main id="main-content" className={styles.main} role="main" tabIndex={-1}>
          <div className={styles.containerInner}>
            <div className={styles.contentGrid}>
              <article 
                className={`${styles.contentCard} ${isVisible.card1 ? styles.visible : ''}`}
                data-animate
                id="card1"
              >
                <h2>Welcome to BaseCamp</h2>
                <p>BaseCamp is a free outdoor resilience coaching program designed exclusively for Bemidji State University students. Created by Joseph Templeton-Smith through his internship and final semester project, this program partners with the Gillette Wellness Center to bring you meaningful outdoor experiences that support your personal growth and mental wellness.</p>
                <p>Whether you're dealing with stress, looking to boost your mood, or simply want to spend more time in nature, BaseCamp offers a supportive space where you can build resilience and connect with fellow students through shared outdoor experiences.</p>
              </article>
              
              <article 
                className={`${styles.contentCard} ${isVisible.card2 ? styles.visible : ''}`}
                data-animate
                id="card2"
              >
                <h2>What We Offer</h2>
                <div className={styles.activityList}>
                  <h3>Program Benefits</h3>
                  <ul>
                    <li>Reduce stress and anxiety through nature connection</li>
                    <li>Improve mood and overall mental well-being</li>
                    <li>Increase physical activity and outdoor time</li>
                    <li>Build resilience and healthy coping skills</li>
                    <li>Connect with supportive peers through shared experiences</li>
                  </ul>
                </div>
                <p>Our activities include nature walks, mindfulness exercises, physical movement, and guided reflection. All sessions are grounded in a trauma-informed and strength-based approach, using the outdoors as a tool for personal growth.</p>
              </article>
              
              <article 
                className={`${styles.contentCard} ${isVisible.card3 ? styles.visible : ''}`}
                data-animate
                id="card3"
              >
                <h2>For Every BSU Student</h2>
                <p>BaseCamp is completely free and voluntary, welcoming all BSU students regardless of background, experience, or fitness level. We offer both individual and group sessions designed to meet you where you are in your wellness journey.</p>
                <p>No outdoor experience necessary – just bring yourself and an open mind. Our supportive environment ensures everyone feels comfortable participating at their own pace while building connections with nature and community.</p>
              </article>
            </div>
          </div>
        </main>
        
        <section className={styles.contactSection} role="region" aria-labelledby="contact-heading">
          <div className={styles.containerInner}>
            <div className={styles.contactContent}>
              <h2 id="contact-heading" className={styles.contactTitle}>Ready to Start Your Journey?</h2>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <h3>Program Creator</h3>
                  <p><strong>Joseph Templeton-Smith</strong></p>
                  <p>BSU Student & Gillette Wellness Center Partner</p>
                </div>
                
                <div className={styles.contactItem}>
                  <h3>Get Started</h3>
                  <p>
                    <a 
                      href="mailto:josephtempletonsmith@yahoo.com"
                      onClick={() => handleContactClick('email')}
                      aria-label="Send email to Joseph Templeton-Smith"
                    >
                      josephtempletonsmith@yahoo.com
                    </a>
                  </p>
                </div>
                
                <div className={styles.contactItem}>
                  <h3>Questions?</h3>
                  <p>
                    <a 
                      href="tel:+12187665177"
                      onClick={() => handleContactClick('phone')}
                      aria-label="Call Joseph Templeton-Smith at 218-766-5177"
                    >
                      218-766-5177
                    </a>
                  </p>
                </div>
              </div>
              
              <a 
                href="mailto:josephtempletonsmith@yahoo.com"
                className={styles.ctaButton}
                onClick={() => handleContactClick('email')}
                aria-label="Send email to learn more about BaseCamp"
              >
                Join BaseCamp Today
              </a>
            </div>
          </div>
        </section>
        
        {/* <section className={styles.qrSection} role="region" aria-labelledby="qr-heading">
          <div className={styles.containerInner}>
            <h2 id="qr-heading">Connect with BaseCamp</h2>
            <div 
              className={styles.qrPlaceholder} 
              role="img" 
              aria-label="QR code placeholder - scan to learn more about BaseCamp or sign up"
            >
              SCAN TO LEARN MORE<br />OR SIGN UP
            </div>
            <p className={styles.qrDescription}>
              Scan the QR code above for quick access to program information and to get started with BaseCamp.
            </p>
          </div>
        </section> */}
        
        <footer className={styles.footer} role="contentinfo">
          <div className={styles.containerInner}>
            <p>&copy; 2025 BaseCamp - Outdoor Resilience Coaching for BSU Students</p>
            <p className={styles.footerSubtext}>
              A partnership between BSU students and the Gillette Wellness Center |{' '}
              <a href="mailto:josephtempletonsmith@yahoo.com">
                Contact for more information
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}