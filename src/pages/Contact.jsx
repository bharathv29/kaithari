import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div style={styles.page}>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <span style={styles.eyebrow}>WE ARE HERE FOR YOU</span>

        <h1 style={styles.heroTitle}>
          Let's Start a
          <br />
          Conversation.
        </h1>

        <p style={styles.heroText}>
          Questions about our sarees, veshtis, or lungis?
          We'd love to help you discover the beauty of
          traditional handloom.
        </p>

        <div style={styles.heroDecoration}>
          <span>✧</span>
          <span>HANDCRAFTED WITH HERITAGE</span>
          <span>✧</span>
        </div>
      </section>


      {/* CONTACT CONTENT */}
      <section style={styles.content}>

        {/* CONTACT INFORMATION */}
        <div style={styles.infoSection}>
          <span style={styles.eyebrow}>GET IN TOUCH</span>

          <h2 style={styles.sectionTitle}>
            We'd Love to Hear from You
          </h2>

          <p style={styles.description}>
            Your experience matters to us. Reach out with
            product enquiries, order questions, or feedback.
            Our team is here to make your shopping experience
            more comfortable.
          </p>

          <div style={styles.infoCard}>
            <div style={styles.iconBox}>✉</div>
            <div>
              <h3 style={styles.infoTitle}>Email Us</h3>
              <p style={styles.infoText}>
                Have a question? Send us an email.
              </p>
              <a
                href="mailto:hello@kaithariloom.com"
                style={styles.infoLink}
              >
                hello@kaithariloom.com
              </a>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.iconBox}>◷</div>
            <div>
              <h3 style={styles.infoTitle}>Customer Support</h3>
              <p style={styles.infoText}>
                We're happy to help with your enquiries.
              </p>
              <span style={styles.infoLink}>
                Send us a message anytime
              </span>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.iconBox}>◇</div>
            <div>
              <h3 style={styles.infoTitle}>Our Promise</h3>
              <p style={styles.infoText}>
                Thoughtful service inspired by traditional
                Indian textile values.
              </p>
            </div>
          </div>
        </div>


        {/* CONTACT FORM */}
        <div style={styles.formCard}>
          <span style={styles.eyebrow}>WRITE TO US</span>

          <h2 style={styles.formTitle}>Send a Message</h2>

          <p style={styles.formDescription}>
            Fill in the details below and tell us how we can help.
          </p>

          {submitted && (
            <div style={styles.successMessage} role="status">
              Thank you for contacting KaithariLoom!
              Your message has been validated, but has not been
              sent to a server.
            </div>
          )}

          <form onSubmit={handleSubmit} style={styles.form}>

            <div style={styles.field}>
              <label htmlFor="name" style={styles.label}>
                Full Name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.field}>
              <label htmlFor="email" style={styles.label}>
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.field}>
              <label htmlFor="subject" style={styles.label}>
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="">Choose a subject</option>
                <option value="Product Enquiry">Product Enquiry</option>
                <option value="Order Support">Order Support</option>
                <option value="Shipping">Shipping</option>
                <option value="Returns">Returns & Exchanges</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={styles.field}>
              <label htmlFor="message" style={styles.label}>
                Your Message *
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  ...styles.input,
                  resize: "vertical",
                  minHeight: "120px",
                }}
              />
            </div>

            <button type="submit" style={styles.submitButton}>
              Send Message <span>→</span>
            </button>

            <p style={styles.privacyNote}>
              We respect your privacy and the information you share.
            </p>

          </form>
        </div>
      </section>


      {/* BOTTOM BANNER */}
      <section style={styles.bottomBanner}>
        <span style={styles.bottomSymbol}>✧</span>

        <h2 style={styles.bottomTitle}>
          Every Thread Tells a Story.
        </h2>

        <p style={styles.bottomText}>
          Thank you for being part of the KaithariLoom journey.
        </p>
      </section>

    </div>
  );
}


const styles = {
  page: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    background: "#FAF7F1",
    color: "#30251D",
    minHeight: "100vh",
    overflowWrap: "break-word",
  },

  hero: {
    padding: "clamp(55px, 9vw, 110px) 24px",
    textAlign: "center",
    background:
      "radial-gradient(circle at 50% 0%, #66503B 0%, #45372A 42%, #30251D 100%)",
    color: "#FAF7F1",
  },

  eyebrow: {
    display: "block",
    fontFamily: "Arial, sans-serif",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "3px",
    lineHeight: 1.8,
    color: "#B89A68",
    marginBottom: "18px",
  },

  heroTitle: {
    fontSize: "clamp(38px, 6vw, 68px)",
    fontWeight: "500",
    lineHeight: 1.12,
    letterSpacing: "-1px",
    margin: "0 0 24px",
  },

  heroText: {
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    fontSize: "15px",
    lineHeight: 1.9,
    color: "#E5D8C7",
  },

  heroDecoration: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "32px",
    fontFamily: "Arial, sans-serif",
    fontSize: "10px",
    letterSpacing: "2px",
    color: "#D6B779",
  },

  content: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
    gap: "clamp(30px, 6vw, 75px)",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "clamp(40px, 7vw, 85px) clamp(20px, 5vw, 45px)",
    alignItems: "start",
  },

  infoSection: {
    minWidth: 0,
  },

  sectionTitle: {
    fontSize: "clamp(29px, 4vw, 42px)",
    lineHeight: 1.2,
    fontWeight: "500",
    margin: "0 0 20px",
  },

  description: {
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: 1.9,
    color: "#756453",
    marginBottom: "30px",
  },

  infoCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "18px",
    padding: "22px 0",
    borderBottom: "1px solid #E5D9C7",
  },

  iconBox: {
    flexShrink: 0,
    width: "46px",
    height: "46px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F0E5D3",
    color: "#987344",
    border: "1px solid #E2D1B6",
    borderRadius: "50%",
    fontSize: "22px",
  },

  infoTitle: {
    fontSize: "19px",
    fontWeight: "500",
    margin: "0 0 8px",
  },

  infoText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    lineHeight: 1.8,
    color: "#756453",
    margin: "0 0 6px",
  },

  infoLink: {
    display: "inline-block",
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    lineHeight: 1.8,
    color: "#987344",
    textDecoration: "none",
    overflowWrap: "anywhere",
  },

  formCard: {
    minWidth: 0,
    padding: "clamp(22px, 4vw, 38px)",
    background: "#FFFFFF",
    border: "1px solid #E6D9C7",
    borderRadius: "5px",
    boxShadow: "0 12px 35px rgba(48, 37, 29, 0.07)",
    boxSizing: "border-box",
  },

  formTitle: {
    fontSize: "clamp(27px, 3vw, 35px)",
    fontWeight: "500",
    margin: "0 0 12px",
  },

  formDescription: {
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    lineHeight: 1.8,
    color: "#756453",
    marginBottom: "26px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    minWidth: 0,
  },

  label: {
    fontFamily: "Arial, sans-serif",
    fontSize: "12px",
    fontWeight: "700",
    color: "#45372A",
  },

  input: {
    display: "block",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    padding: "13px 14px",
    border: "1px solid #DDD0BD",
    borderRadius: "3px",
    background: "#FCFAF6",
    color: "#30251D",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: 1.5,
    outlineColor: "#B89A68",
  },

  submitButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
    padding: "15px 20px",
    marginTop: "4px",
    border: "1px solid #30251D",
    borderRadius: "3px",
    background: "#30251D",
    color: "#FAF7F1",
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
  },

  privacyNote: {
    fontFamily: "Arial, sans-serif",
    fontSize: "11px",
    lineHeight: 1.7,
    color: "#8A7B6B",
    textAlign: "center",
    margin: "0",
  },

  successMessage: {
    padding: "14px",
    marginBottom: "20px",
    border: "1px solid #B8CDB2",
    background: "#F0F6ED",
    color: "#315B35",
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    lineHeight: 1.7,
  },

  bottomBanner: {
    textAlign: "center",
    padding: "45px 20px",
    background: "#F0E7D9",
    borderTop: "1px solid #E2D3BD",
  },

  bottomSymbol: {
    display: "block",
    fontSize: "27px",
    color: "#A0835B",
    marginBottom: "12px",
  },

  bottomTitle: {
    fontSize: "clamp(24px, 4vw, 36px)",
    fontWeight: "500",
    lineHeight: 1.3,
    margin: "0 0 12px",
  },

  bottomText: {
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    lineHeight: 1.8,
    color: "#756453",
    margin: 0,
  },
};

export default Contact;