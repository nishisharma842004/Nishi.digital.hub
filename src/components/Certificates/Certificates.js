import React from "react";
import Button from "react-bootstrap/Button";

function Certificates() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#808080", // background color set to gray
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
  };

  const descriptionStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "40px",
    maxWidth: "700px",
    lineHeight: "1.6",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexWrap: "wrap", // Allow buttons to wrap if space is limited
    justifyContent: "center",
    gap: "15px",
  };

  const buttonStyle = {
    padding: "12px 25px",
    fontSize: "1.1rem",
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "200px", // width of the button
  };

  return (
    <div style={containerStyle}>
      {/* Certificates Section */}
      <h2 style={titleStyle}>Certificates</h2>
      <p style={descriptionStyle}>
        I am proud to have earned the following certifications, which demonstrate my commitment to continuous learning and professional growth. 🎓
      </p>
      <div style={buttonContainerStyle}>
        {/* <Button variant="success" href="https://www.coursera.org/account/accomplishments/certificate/ABC123" target="_blank" style={buttonStyle}>
          🎓 Coursera Certificate
        </Button>
        <Button variant="info" href="https://www.udemy.com/certificate/XYZ456" target="_blank" style={buttonStyle}>
          📜 Udemy Certificate
        </Button> */}
        {/* <Button variant="warning" href="https://www.linkedin.com/learning/certificates/LMN789" target="_blank" style={buttonStyle}>
          🏅 LinkedIn Learning Certificate
        </Button> */}
        {/* <Button variant="primary" href="https://www.edx.org/certificate/PQR321" target="_blank" style={buttonStyle}>
          📘 edX Certificate
        </Button> */}
        {/* New Certificates */}
        <Button variant="dark" href="https://drive.google.com/file/d/17hVQ3sEwAYbToz1kBXh4wZO85rHOu2qP/view" target="_blank" style={buttonStyle}>
  🏅 HackerRank Medium Problem Solving
</Button>
<Button variant="dark" href="https://drive.google.com/file/d/1edrMT_HcdE4c3oGWBQtoZFFmQ2KybScs/view" target="_blank" style={buttonStyle}>
  🔗 Graph Programming Camp
</Button>
<Button variant="dark" href="https://drive.google.com/file/d/1voBWcwKkux0hBfwEwTDU-WzGCm5kkebc/view" target="_blank" style={buttonStyle}>
  📜 GeeksforGeeks Certificate
</Button>
<Button variant="dark" href="https://drive.google.com/file/d/1_30Xy3YE4z991aBuEzEzqDniUP8QAFdk/view" target="_blank" style={buttonStyle}>
  ☕ Java Programming - Udemy
</Button>
<Button variant="dark" href="https://drive.google.com/file/d/1rRNYC6CDvChAZ0c4ntdzmgv0pkHbif8q/view" target="_blank" style={buttonStyle}>
  🏆 3rd Rank in Programming Contest
</Button>
<Button variant="dark" href="SQL_MySQL_Database_Design_Certificate_Link" target="_blank" style={buttonStyle}>
  🗄️ SQL using MySQL & Database Design
</Button>
<Button variant="dark" href="https://drive.google.com/file/d/1E-1T1pxD1KkoC29NNNNNBtrEek_F1-5e/view" target="_blank" style={buttonStyle}>
  🔢 Data Structures & Algorithms - Udemy
</Button>
      </div>
    </div>
  );
}

export default Certificates;
