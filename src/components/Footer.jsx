import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>

      {/* TOP DECORATIVE LINE */}
      <div style={styles.goldLine}></div>

      {/* MAIN FOOTER */}
      <div style={styles.container}>

        {/* BRAND SECTION */}
        <div style={styles.brandSection}>
          <Link to="/" style={styles.brandName}>
            KaithariLoom<span style={styles.brandDot}>.</span>
          </Link>

          <p style={styles.brandDescription}>
            Woven with tradition, made for today.
            Discover the timeless beauty of Indian handloom
            through sarees, veshtis, and lungis crafted with
            heritage, elegance, and care.
          </p>

          <div style={styles.brandDecoration}>
            <span>✧</span>
            <span>ROOTED IN HERITAGE</span>
            <span>✧</span>
          </div>
        </div>


        {/* QUICK LINKS */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Explore</h3>

          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Our Collection</Link>
          <Link to="/about" style={styles.link}>Our Story</Link>
          <Link to="/contact" style={styles.link}>Contact Us</Link>
        </div>


        {/* PRODUCT CATEGORIES */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Our Collections</h3>

          <Link to="/products" style={styles.link}>Traditional Sarees</Link>
          <Link to="/products" style={styles.link}>Elegant Veshtis</Link>
          <Link to="/products" style={styles.link}>Classic Lungis</Link>
          <Link to="/products" style={styles.link}>All Products</Link>
        </div>


        {/* CONTACT SECTION */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Get in Touch</h3>

          <p style={styles.contactText}>
            Have a question about our collection?
            We'd love to hear from you.
          </p>

          <Link to="/contact" style={styles.contactLink}>
            Contact Our Team →
          </Link>

          <a
            href="mailto:hello@kaithariloom.com"
            style={styles.email}
          >
            hello@kaithariloom.com
          </a>
        </div>

      </div>


      {/* FOOTER QUOTE */}
      <div style={styles.quoteSection}>
        <p style={styles.quote}>
          "Every thread carries a story. Every weave preserves a tradition."
        </p>
      </div>


      {/* BOTTOM FOOTER */}
      <div style={styles.bottomFooter}>
        <p style={styles.copyright}>
          © {currentYear} KaithariLoom. All rights reserved.
        </p>

        <p style={styles.bottomText}>
          Crafted with care <span style={styles.heart}>♥</span>
          {" "}Inspired by tradition.
        </p>

        <Link to="/" style={styles.backToTop}>
          Back to Home ↑
        </Link>
      </div>

    </footer>
  );
}


const styles = {
  footer: {
    background: "linear-gradient(135deg, #30251D 0%, #45372A 55%, #30251D 100%)",
    color: "#F8F0E3",
    fontFamily: "Georgia, 'Times New Roman', serif",
    borderTop: "1px solid #B89A68",
    boxSizing: "border-box",
    width: "100%",
  },

  goldLine: {
    width: "100%",
    height: "3px",
    background: "linear-gradient(90deg, #30251D, #D6B779, #987344, #D6B779, #30251D)",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
    gap: "clamp(28px, 4vw, 55px)",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "clamp(38px, 6vw, 70px) clamp(22px, 5vw, 65px)",
    boxSizing: "border-box",
  },

  brandSection: {
    maxWidth: "350px",
  },

  brandName: {
    display: "inline-block",
    color: "#F8F0E3",
    fontSize: "clamp(25px, 3vw, 32px)",
    fontWeight: "700",
    letterSpacing: "-0.8px",
    textDecoration: "none",
    marginBottom: "18px",
  },

  brandDot: {
    color: "#D6B779",
  },

  brandDescription: {
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    lineHeight: 2,
    color: "#D5C6B3",
    margin: "0 0 22px",
  },

  brandDecoration: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    color: "#D6B779",
    fontFamily: "Arial, sans-serif",
    fontSize: "9px",
    letterSpacing: "1.8px",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "14px",
    minWidth: 0,
  },

  heading: {
    color: "#D6B779",
    fontSize: "18px",
    fontWeight: "500",
    margin: "0 0 10px",
    paddingBottom: "12px",
    borderBottom: "1px solid rgba(214, 183, 121, 0.35)",
    width: "100%",
    maxWidth: "220px",
  },

  link: {
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#E5D8C7",
    textDecoration: "none",
    overflowWrap: "anywhere",
  },

  contactText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    lineHeight: 1.9,
    color: "#D5C6B3",
    margin: "0 0 4px",
  },

  contactLink: {
    display: "inline-block",
    color: "#D6B779",
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    fontWeight: "600",
    textDecoration: "none",
    lineHeight: 1.8,
  },

  email: {
    color: "#E5D8C7",
    fontFamily: "Arial, sans-serif",
    fontSize: "12px",
    lineHeight: 1.8,
    textDecoration: "none",
    overflowWrap: "anywhere",
  },

  quoteSection: {
    textAlign: "center",
    margin: "0 clamp(20px, 5vw, 65px)",
    padding: "25px 15px",
    borderTop: "1px solid rgba(214, 183, 121, 0.25)",
    borderBottom: "1px solid rgba(214, 183, 121, 0.25)",
  },

  quote: {
    color: "#DCC18D",
    fontSize: "clamp(14px, 2vw, 18px)",
    fontStyle: "italic",
    lineHeight: 1.8,
    margin: 0,
  },

  bottomFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "14px 24px",
    padding: "22px clamp(22px, 5vw, 65px)",
    maxWidth: "1400px",
    margin: "0 auto",
    boxSizing: "border-box",
  },

  copyright: {
    fontFamily: "Arial, sans-serif",
    fontSize: "11px",
    lineHeight: 1.8,
    color: "#C7B7A3",
    margin: 0,
  },

  bottomText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "11px",
    lineHeight: 1.8,
    color: "#C7B7A3",
    margin: 0,
  },

  heart: {
    color: "#D6B779",
  },

  backToTop: {
    fontFamily: "Arial, sans-serif",
    fontSize: "12px",
    color: "#D6B779",
    textDecoration: "none",
    lineHeight: 1.8,
  },
};

export default Footer;