import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Celebal Technologies",
      location: "Remote",
      duration: "May 2025 – July 2025",
      description: [
        "Developed responsive web applications using React.js and Spring Boot, improving task load time by 30%.",
        "Created a To-Do List app with real-time Firebase integration, enhancing productivity and reducing sync delays by 40%.",
        "Implemented secure user authentication and dynamic UI rendering, leading to a smoother user experience.",
        "Integrated RESTful APIs and deployed apps, achieving 100% uptime during testing and demo sessions.",
        "Collaborated closely in Agile sprints, meeting 100% of project deadlines and received positive feedback from mentors."
      ],
    },
   
    {
      role: "Software Engineer Intern",
      company: "Tech Solutions Ltd",
      location: "Delhi, India",
      duration: "June 2024 – Aug 2024",
      description: [
        "Developed and deployed web applications using React.js and Firebase.",
        "Worked on real-time data synchronization and user authentication.",
        "Collaborated with cross-functional teams to deliver product features.",
      ],
    },
    {
      role: "DSA Mentor",
      company: "GDG IGDTUW",
     
      duration: "Jan 2024 ",
      description: [
        "Mentored 200+ students on Data Structures & Algorithms.",
        "Conducted live problem-solving sessions and mock interviews.",
        "Created curated practice sheets for beginner to advanced levels.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <h3>{exp.role}</h3>
          <h4>{exp.company} – <span>{exp.location}</span></h4>
          <p><em>{exp.duration}</em></p>
          <ul>
            {exp.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
