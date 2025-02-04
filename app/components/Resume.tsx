export default function Resume() {
    return (
      <div className="resume">
        <header className="resume-header">
          <h1>Akshay Bharath</h1>
          <div className="contact-info">
            <p>Email: akshay@akshaybharath.nyc</p>
            <p>Phone: (425) 802-4975</p>
            <p>LinkedIn: linkedin.com/in/akshaybharath</p>
          </div>
        </header>
  
        <section className="resume-section">
          <h2>Summary</h2>
          <p>
          Experienced engineering manager and iOS Engineer with strong leadership, management, and coaching skills. Highly motivated to always take on any kind of challenge that is thrown my way, whether it people related or code-related. I love mentoring other engineers and I am always willing to lend an ear if someone needs to just talk. I love to really dig into all the layers of code that go into a mobile app, including networking, threads and queues, the UI, analytics, etc. I enjoy keeping up-to-date with all the latest libraries, frameworks, and ideas that other experts in the community share.
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
  
        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            <li>Swift</li>
            <li>SwiftUI</li>
            <li>Async/Await</li>
            <li>Objectve-C</li>
            <li>Python</li>
            <li>RESTful APIs</li>
            <li>Docker & Kubernetes</li>
            <li>Architecture Design</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Engineering Leadership Skills</h2>
          <ul className="skills-list">
            <li>Performance Mangement</li>
            <li>Hiring A+ Candidates</li>
            <li>Growth and Development</li>
            <li>Cross-functional Collaboration</li>
            <li>Strategic Partnership</li>
          </ul>
        </section>
      </div>
    );
  }