
export default function Card({ title, description, image }) {
    return (
      <div style={styles.card}>
        <img src={image} alt={title} style={styles.image} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  
  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      maxWidth: "300px",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "8px",
    },
  };
  