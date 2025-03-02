import "../styles/Resume.css";

export default function Resume() {
    return (
      <div className="resume">
        <header className="resume-header">
          <h1>Akshay Bharath</h1>
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:akshay.bharath@gmail.com">akshay.bharath@gmail.com</a>
            </p>
            <p>
              <i className="fab fa-linkedin"></i>{" "}
              <a href="https://linkedin.com/in/akshaybharath">linkedin.com/in/akshaybharath</a>
            </p>
          </div>
        </header>
  
        <section className="resume-section">
          <h2>Summary</h2>
          <p>
          Accomplished mobile engineer with a demonstrated history of effective leadership, team management, and mentorship. I adapt my leadership approach to align with the unique needs of each opportunity and organization, with a strong preference for coaching and servant-leadership styles. Highly driven and proactive, I thrive on tackling diverse challenges, whether they involve technical problem-solving or team dynamics. I take great satisfaction in mentoring fellow engineers and providing support when needed. My expertise extends to the intricate aspects of mobile app development, including networking, thread management, UI/UX design, analytics, and more. I am committed to staying current with the latest libraries, frameworks, and industry best practices, continuously learning from thought leaders in the field.
          </p>
        </section>
  
        <section className="resume-section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Engineering Manager - <a href="https://ro.co">Ro</a> (New York, NY)</h3>
            <p className="date">Apr 2023 - Feb 2025</p>
            <ul>
              <li>Led a team of 7 developers to build a scalable and delightful user experience across iOS and Web</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Lead iOS Engineer - <a href="https://rallyrd.com">Rally</a> (New York, NY)</h3>
            <p className="date">June 2022 - Apr 2023</p>
            <ul>
              <li>Implemented and delivered delightful iOS user experiences for the Rally trading experience.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>iOS Engineering Manager - <a href="https://aedit.com">Aedit</a> (New York, NY)</h3>
            <p className="date">September 2020 - May 2022</p>
            <ul>
              <li>Managed, coached, and grew the iOS team</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Senior Mobile Engineer and Tech Lead - <a href="https://animoto.com">Animoto</a> (New York, NY)</h3>
            <p className="date">May 2017 - September 2020</p>
            <ul>
              <li>Led a team of six to develop a brand new iOS product from scratch using Swift</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Senior Software Engineer - <a href="https://animoto.com">Animoto</a> (New York, NY)</h3>
            <p className="date">May 2014 - May 2017</p>
            <ul>
              <li>Designed and developed test automation framework for new service within Animoto</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Software Development Engineer 2 - <a href="https://www.microsoft.com/en-us/">Microsoft</a> (Redmond, WA)</h3>
            <p className="date">Sept 2009 - Apr 2014</p>
            <ul>
              <li>Designed and implemented telemetry APIs in C++ for core Windows 8 Office apps</li>
            </ul>
          </div>
        </section>
  
        <section className="resume-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Computer Science</h3>
            <p className="date"><a href="https://uwaterloo.ca">University of Waterloo</a>, 2004 - 2009</p>
          </div>
        </section>
      </div>
    );
}