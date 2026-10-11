import { Link } from "react-router-dom";

function About() {
  return (
    <div style={styles.page}>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>
            OUR STORY · OUR HERITAGE
          </span>

          <h1 style={styles.heroTitle}>
            Woven with Tradition,
            <br />
            Made for Today.
          </h1>

          <p style={styles.heroText}>
            Celebrating the timeless beauty of Indian handloom
            through sarees, veshtis, and lungis crafted with
            tradition, care, and a love for every thread.
          </p>

          <Link to="/products" style={styles.primaryButton}>
            Explore Our Collection <span>→</span>
          </Link>
        </div>

        <div style={styles.heroImageWrap}>
          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1100&q=85"
            alt="Traditional Indian silk saree"
            style={styles.heroImage}
          />

          <div style={styles.imageLabel}>
            <span style={styles.labelSmall}>THE BEAUTY OF</span>
            <strong>Indian Handloom</strong>
          </div>
        </div>
      </section>


      {/* BRAND INTRODUCTION */}
      <section style={styles.storySection}>
        <div style={styles.sectionHeading}>
          <span style={styles.eyebrow}>THE KAITHARILOOM PROMISE</span>

          <h2 style={styles.sectionTitle}>
            Tradition in Every Thread
          </h2>

          <div style={styles.goldLine} />
        </div>

        <p style={styles.storyText}>
          At KaithariLoom, we believe traditional textiles are
          more than fabrics. They represent culture, artistry,
          identity, and generations of craftsmanship.
          Our collection brings the richness of Indian handloom
          closer to modern homes, making timeless styles easier
          to discover and enjoy.
        </p>
      </section>


      {/* VALUES SECTION */}
      <section style={styles.valuesSection}>
        <div style={styles.valuesHeading}>
          <span style={styles.eyebrow}>WHAT MAKES US DIFFERENT</span>

          <h2 style={styles.sectionTitle}>
            Crafted with Purpose
          </h2>

          <p style={styles.valuesIntro}>
            Thoughtful selections inspired by heritage and
            designed for everyday elegance.
          </p>
        </div>

        <div style={styles.cardGrid}>

          <article style={styles.card}>
            <div style={styles.icon}>✧</div>
            <h3 style={styles.cardTitle}>Timeless Tradition</h3>
            <p style={styles.cardText}>
              Discover classic Indian textile styles that
              celebrate our rich cultural heritage.
            </p>
          </article>

          <article style={styles.card}>
            <div style={styles.icon}>❋</div>
            <h3 style={styles.cardTitle}>Attention to Detail</h3>
            <p style={styles.cardText}>
              From intricate borders to beautiful textures,
              every detail deserves appreciation.
            </p>
          </article>

          <article style={styles.card}>
            <div style={styles.icon}>◇</div>
            <h3 style={styles.cardTitle}>Everyday Elegance</h3>
            <p style={styles.cardText}>
              Explore sarees, veshtis, and lungis for
              celebrations, traditions, and daily wear.
            </p>
          </article>

        </div>
      </section>


      {/* COLLECTION SECTION */}
      <section style={styles.collectionSection}>
        <div style={styles.collectionContent}>
          <span style={styles.eyebrow}>
            ROOTED IN CULTURE
          </span>

          <h2 style={styles.collectionTitle}>
            A Heritage Worth Wearing
          </h2>

          <p style={styles.collectionText}>
            From the graceful drape of a saree to the timeless
            simplicity of a veshti and the comfort of a lungi,
            discover textiles that bring tradition into everyday
            life.
          </p>

          <Link to="/products" style={styles.secondaryButton}>
            Discover Our Products →
          </Link>
        </div>
      </section>


      {/* FOOTER MESSAGE */}
      <section style={styles.closingSection}>
        <h2 style={styles.closingTitle}>
          Rooted in Heritage. Woven for You.
        </h2>

        <p style={styles.closingText}>
          KaithariLoom — where tradition finds its place in
          modern living.
        </p>
      </section>

    </div>
  );
}


const styles = {
  page: {
    "--unused": "0",
    fontFamily: "Georgia, 'Times New Roman', serif",
    color: "#30251D",
    background: "#FAF7F1",
    overflowWrap: "break-word",
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
    alignItems: "center",
    gap: "clamp(28px, 5vw, 70px)",
    padding: "clamp(36px, 7vw, 90px) clamp(20px, 7vw, 100px)",
    background: "linear-gradient(135deg, #F5EBDD, #FCFAF6)",
  },

  heroContent: {
    maxWidth: "580px",
  },

  eyebrow: {
    display: "block",
    color: "#987344",
    fontFamily: "Arial, sans-serif",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "3px",
    lineHeight: 1.8,
    marginBottom: "20px",
  },

  heroTitle: {
    fontSize: "clamp(36px, 5vw, 65px)",
    fontWeight: "500",
    lineHeight: 1.12,
    letterSpacing: "-1.5px",
    margin: "0 0 24px",
    color: "#30251D",
  },

  heroText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "15px",
    lineHeight: 1.9,
    color: "#6B5B4B",
    marginBottom: "32px",
    maxWidth: "480px",
  },

  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    padding: "15px 22px",
    background: "#30251D",
    color: "#FAF7F1",
    textDecoration: "none",
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    fontWeight: "600",
    border: "1px solid #30251D",
    borderRadius: "3px",
  },

  heroImageWrap: {
    position: "relative",
    minWidth: 0,
    width: "100%",
    maxWidth: "620px",
    justifySelf: "center",
  },

  heroImage: {
    display: "block",
    width: "100%",
    height: "clamp(300px, 43vw, 540px)",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "3px",
    boxShadow: "16px 16px 0 #E6D5BA",
  },

  imageLabel: {
    position: "absolute",
    left: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "17px 22px",
    background: "#30251D",
    color: "#F8F0E3",
  },

  labelSmall: {
    fontFamily: "Arial, sans-serif",
    fontSize: "9px",
    letterSpacing: "2px",
    color: "#D6B779",
  },

  storySection: {
    padding: "clamp(48px, 7vw, 90px) 24px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
  },

  sectionHeading: {
    marginBottom: "25px",
  },

  sectionTitle: {
    fontSize: "clamp(28px, 4vw, 43px)",
    fontWeight: "500",
    lineHeight: 1.2,
    margin: "0 0 22px",
  },

  goldLine: {
    width: "65px",
    height: "2px",
    background: "#B89A68",
    margin: "0 auto",
  },

  storyText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "15px",
    lineHeight: 2,
    color: "#716254",
    maxWidth: "750px",
    margin: "0 auto",
  },

  valuesSection: {
    padding: "clamp(48px, 7vw, 85px) clamp(20px, 6vw, 80px)",
    background: "#F0E7D9",
  },

  valuesHeading: {
    textAlign: "center",
    maxWidth: "650px",
    margin: "0 auto 42px",
  },

  valuesIntro: {
    fontFamily: "Arial, sans-serif",
    color: "#756453",
    fontSize: "14px",
    lineHeight: 1.8,
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
    gap: "22px",
    maxWidth: "1150px",
    margin: "0 auto",
  },

  card: {
    padding: "32px 25px",
    background: "#FCFAF6",
    border: "1px solid #E2D3BD",
    borderRadius: "4px",
    boxShadow: "0 6px 20px rgba(48, 37, 29, 0.04)",
    textAlign: "center",
  },

  icon: {
    fontSize: "35px",
    color: "#A0835B",
    marginBottom: "15px",
  },

  cardTitle: {
    fontSize: "21px",
    fontWeight: "500",
    margin: "0 0 14px",
  },

  cardText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    lineHeight: 1.9,
    color: "#756453",
    margin: 0,
  },

  collectionSection: {
    padding: "clamp(50px, 8vw, 95px) 24px",
    textAlign: "center",
    background: "linear-gradient(135deg, #45372A, #30251D)",
    color: "#FAF7F1",
  },

  collectionContent: {
    maxWidth: "700px",
    margin: "0 auto",
  },

  collectionTitle: {
    fontSize: "clamp(30px, 4.5vw, 48px)",
    lineHeight: 1.2,
    fontWeight: "500",
    margin: "0 0 22px",
  },

  collectionText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: 2,
    color: "#E4D7C4",
    marginBottom: "30px",
  },

  secondaryButton: {
    display: "inline-block",
    padding: "14px 22px",
    color: "#30251D",
    background: "#D6B779",
    textDecoration: "none",
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    fontWeight: "700",
    borderRadius: "3px",
  },

  closingSection: {
    textAlign: "center",
    padding: "45px 20px",
    background: "#FAF7F1",
  },

  closingTitle: {
    fontSize: "clamp(23px, 3.5vw, 34px)",
    lineHeight: 1.4,
    fontWeight: "500",
    margin: "0 0 12px",
  },

  closingText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    lineHeight: 1.8,
    color: "#806C54",
    margin: 0,
  },
};

export default About;