import React from "react";
import Button from "react-bootstrap/Button";

function CodingProfiles() {
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
      <h2 style={titleStyle}>Coding Profiles</h2>
      <p style={descriptionStyle}>
        Welcome to my coding profiles! Here are some of the platforms where I actively practice coding, solve problems, and improve my skills. Feel free to check them out and connect with me! 🚀
      </p>
      <div style={buttonContainerStyle}>
        {/* <Button variant="dark" href="https://www.linkedin.com/in/pragya-verma-a367631b3/" target="_blank" style={buttonStyle}>
          🔗 LinkedIn */}
        {/* </Button> */}
        <Button variant="dark" href="https://leetcode.com/u/nishisharma842004/" target="_blank" style={buttonStyle}>
          💻 LeetCode
        </Button>
        <Button variant="dark" href="https://www.geeksforgeeks.org/user/nishishar3k8q/" target="_blank" style={buttonStyle}>
          🧠 GeeksforGeeks
        </Button>
        <Button variant="dark" href="https://www.hackerrank.com/profile/nishi003btdmam23" target="_blank" style={buttonStyle}>
          🏆 HackerRank
        </Button>
        <Button variant="dark" href="https://unstop.com/u/nishisha8521" target="_blank" style={buttonStyle}>
          🎯 Unstop
        </Button>
       
        <Button variant="dark" href="https://www.codechef.com/users/nishisharma842" target="_blank" style={buttonStyle}>
          🍽️ CodeChef
        </Button>
      </div>
    </div>
  );
}

export default CodingProfiles;
