import React, { useEffect, useState } from "react";

const Offers = () => {
  const offerKey = "settlers-offer-claimed";
  const [claimed, setClaimed] = useState(false);
  const [countdown, setCountdown] = useState("");
  const [expired, setExpired] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    offer: "Dinner for Two",
    note: "",
  });

  const funnyMessages = [
    "🎯 This is not a drill! Real offer, real food!",
    "🍲 Come hungry. Leave royalty.",
    "🚨 10% off before Grandma eats it all!",
    "🎁 Offers hotter than our chapatis!",
    "👑 Eat like a king. Pay like a peasant.",
    "🕒 Hurry! Offer runs faster than our waiter!",
  ];

  const offerExpiresAt = new Date("2025-07-25T23:59:59");

  useEffect(() => {
    const isClaimed = localStorage.getItem(offerKey) === "true";
    setClaimed(isClaimed);

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerExpiresAt.getTime() - now;

      if (distance < 0) {
        clearInterval(countdownInterval);
        setCountdown("Offer expired");
        setExpired(true);
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % funnyMessages.length);
    }, 4000);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(messageInterval);
    };
  }, []);

  const handleClaim = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(offerKey, "true");
      setClaimed(true);
      setLoading(false);
      setShowForm(true);
    }, 1800);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, offer, note } = formData;

    const message = `Hi Settlers Inn! I'd like to claim this week's 10% offer.%0A
Name: ${name}%0APhone: ${phone}%0AOffer: ${offer}%0AMessage: ${note}`;

    window.location.href = `https://wa.me/254748778388?text=${encodeURIComponent(message)}`;
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.funHeader}>{funnyMessages[messageIndex]}</h2>

      <div style={styles.card}>
        <h1 style={styles.title}>🔥 10% OFF This Week Only!</h1>

        {!expired && (
          <div style={styles.countdown}>
            ⏳ Time left: <strong style={styles.timer}>{countdown}</strong>
          </div>
        )}

        <p style={styles.description}>
          Treat yourself to hearty Kenyan dishes & comfy rooms at Settlers Inn.  
          This week's discount is so good, we almost ate it ourselves!
        </p>

        {!claimed && !loading && (
          <button
            onClick={handleClaim}
            style={{
              ...styles.button,
              backgroundColor: "#25D366",
              cursor: "pointer",
            }}
          >
            🎁 Claim Your Offer
          </button>
        )}

        {loading && <div style={styles.spinner}>⏳ Claiming your reward...</div>}

        {showForm && (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
            <select
              name="offer"
              value={formData.offer}
              onChange={handleChange}
              style={styles.input}
            >
              <option>Dinner for Two</option>
              <option>Room Discount</option>
              <option>Lunch Meal Deal</option>
            </select>
            <textarea
              name="note"
              placeholder="Optional message..."
              value={formData.note}
              onChange={handleChange}
              rows={3}
              style={{ ...styles.input, resize: "none" }}
            />
            <button type="submit" style={styles.button}>
              📩 Submit to WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: "Fira Code, monospace",
    backgroundColor: "#0d1117",
    color: "#c9d1d9",
    minHeight: "100vh",
    padding: "3rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  funHeader: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
    color: "#58a6ff",
    animation: "pulse 3s ease-in-out infinite",
    minHeight: "40px",
  },
  card: {
    background: "#161b22",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 0 20px rgba(159, 239, 0, 0.15)",
    maxWidth: "600px",
    width: "100%",
  },
  title: {
    color: "#9fef00",
    fontSize: "1.8rem",
    marginBottom: "1rem",
  },
  countdown: {
    backgroundColor: "#1f6feb",
    padding: "0.6rem 1rem",
    borderRadius: "8px",
    display: "inline-block",
    color: "#fff",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  timer: {
    color: "#9fef00",
  },
  description: {
    margin: "1rem 0 2rem",
    fontSize: "1.05rem",
    color: "#999",
  },
  button: {
    padding: "0.9rem 2rem",
    fontSize: "1.1rem",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    transition: "0.3s ease",
    boxShadow: "0 0 10px rgba(37, 211, 102, 0.3)",
    marginTop: "1rem",
  },
  spinner: {
    fontSize: "1rem",
    color: "#9fef00",
    marginTop: "1rem",
    animation: "pulse 2s infinite",
  },
  form: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#0d1117",
    color: "#fff",
  },
};

export default Offers;
