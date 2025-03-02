import "../styles/Resume.css";

export default function Resume() {
    return (
      <div className="resume">
        <header className="resume-header">
          <h1>Akshay Bharath</h1>
          <div className="contact-info">
            <p>
              <i className="fas fa-location-dot"></i>{" "}
              <a href="https://www.google.com/maps/place/Queens,+NY/">Queens, NY, USA</a>
            </p>
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
          <div className="experience-item">
          <p>
          Accomplished mobile engineer with a demonstrated history of effective leadership, team management, and mentorship. I adapt my leadership approach to align with the unique needs of each opportunity and organization, with a strong preference for coaching and servant-leadership styles. Highly driven and proactive, I thrive on tackling diverse challenges, whether they involve technical problem-solving or team dynamics. I take great satisfaction in mentoring fellow engineers and providing support when needed. My expertise extends to the intricate aspects of mobile app development, including networking, thread management, UI/UX design, analytics, and more. I am committed to staying current with the latest libraries, frameworks, and industry best practices, continuously learning from thought leaders in the field.
          </p>
          </div>
        </section>
  
        <section className="resume-section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Engineering Manager - <a href="https://ro.co">Ro</a> (New York, NY)</h3>
            <p className="date">Apr 2023 - Feb 2025</p>
            <ul>
              <li>Led a team of 7 engineers to develop patient-facing features for native iOS and web applications, driving a 20% to 40% increase in the company’s North Star metric through innovative solutions and cross-functional collaboration.</li>
              <li>Spearheaded the rollout of a critical HealthKit integration, collaborating with product, design, legal, and clinical teams to boost weight data ingestion by 40%.</li>
              <li>Designed and launched a monthly Product Health Check process with product management, reducing p95 latency to under 500 ms by identifying and resolving performance bottlenecks.</li>
              <li>Built and scaled the iOS engineering team, hiring and onboarding 3 new engineers within 6 months, while fostering a culture of innovation by allocating 20% sprint time for tech debt and career-aligned side projects.</li>
              <li>Developed and streamlined release processes, including introducing a Release Captain rotation and daily staging builds, improving release efficiency and cross-team collaboration.</li>
              <li>Championed team growth and knowledge sharing by establishing the Monthly Mobile Mixer, a forum for discussing iOS frameworks, problem-solving, and industry trends, while mentoring a senior iOS engineer to improve performance.</li>
              <li>Defined prerequisites and strategy for exploring a native Android app, including conducting a design audit, addressing iOS performance issues, and evaluating multi-platform solutions, ensuring alignment with long-term mobile product goals.</li>
              <li>Improved release planning and stakeholder communication by implementing a project timeline tracker alongside JIRA, visualizing upcoming releases and enhancing transparency with leadership and cross-functional teams.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Lead iOS Engineer - <a href="https://rallyrd.com">Rally</a> (New York, NY)</h3>
            <p className="date">June 2022 - Apr 2023</p>
            <ul>
              <li>Implemented and delivered delightful iOS user experiences for the Rally trading experience.</li>
              <li>Designed and delivered engaging iOS user experiences for the Rally trading platform, driving a nearly 30% increase in active user investment across multiple asset classes.</li>
              <li>Built out scalable SPM packages that separated different layers of the app.</li>
              <li>Introduced SwiftUI into a UIKit-heavy code base along with best practices for the team.</li>
              <li>Introduced Async/Await into the codebase to unlock more future-proof asynchronous mechanisms.</li>
              <li>Worked with product and design leads to ensure we were unlocking the right user outcomes.</li>
              <li>Introduced new processes and workflows to improve the quality & speed of delivery across the eng org.</li>
              <li>Mentored and provided actionable feedback for other less-experienced iOS and non-iOS engineers.</li>
              <li>Worked with the CTO to introduce a new tech spike and discovery process to help surface risks and tradeoffs for all projects.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>iOS Engineering Manager - <a href="https://aedit.com">Aedit</a> (New York, NY)</h3>
            <p className="date">September 2020 - May 2022</p>
            <ul>
              <li>Managed, coached, and led the iOS team to build user-friendly experiences in the core iOS app.</li>
              <li>Implemented a brand new Agile process that completely changed how we managed tickets.</li>
              <li>Developed Team OKRs based on company OKRs that were used to track our quarterly work.</li>
              <li>Implemented new team processes to improve code quality and velocity.</li>
              <li>Provided frequent feedback and guidance via weekly 1:1s and yearly performance reviews.</li>
              <li>Identified cross-functional dependencies and removed blockers across all the stakeholders.</li>
              <li>Built several intuitive and responsive scanning features using SwiftUI based on design specs.</li>
              <li>Migrated our complex network library classes to Combine.</li>
              <li>Improved team’s app submission velocity by over 50% using Fastlane.</li>
              <li>Worked with the web EM to ensure consistent release patterns and quality checks across the org.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Senior Mobile Engineer and Tech Lead - <a href="https://animoto.com">Animoto</a> (New York, NY)</h3>
            <p className="date">May 2014 - September 2020</p>
            <ul>
              <li>Led a team of six to develop a brand new iOS product from scratch using Swift.</li>
              <li>Helped architect and develop the main MVVM-C architecture using RxSwift.</li>
              <li>Worked with the product designer to build a user-friendly UX for all new features.</li>
              <li>Participated in full discovery cycles to better identify and prioritize new user opportunities.</li>
              <li>Used both qualitative and quantitative data to ensure the product was meeting our goals.</li>
              <li>Worked with partner PMs to better plan and estimate quarterly requirements.</li>
              <li>Supervised all the mobile interns that were brought on over the last two years.</li>
              <li>Designed and developed test automation framework for new service within Animoto.</li>
              <li>Created tools to improve product deployment and test automation.</li>
              <li>Implemented a highly scalable CI system that was used for a new backend service.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Software Development Engineer 2 - <a href="https://www.microsoft.com/en-us/">Microsoft</a> (Redmond, WA)</h3>
            <p className="date">Sept 2013 - Apr 2014</p>
            <ul>
              <li>Designed and implemented telemetry APIs in C++ for core Windows 8 Office apps.</li>
              <li>Helped design new reporting tool to capture telemetry data for Office apps.</li>
              <li>Created a few performance measurement tools using C#.</li>
              <li>Helped maintain the performance test collection service.</li>
              <li>Mentored new SDE hires.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Software Development Engineer - <a href="https://www.microsoft.com/en-us/">Microsoft</a> (Redmond, WA)</h3>
            <p className="date">Sept 2009 - Apr 2013</p>
            <ul>
              <li>Designed and developed a tool called ChaosChimp that injects failures against a cluster.</li>
              <li>Designed and developed a test framework in C#.</li>
              <li>Wrote cluster deployment tools in PowerShell.</li>
              <li>Designed and implemented many stress and failure test cases for our product.</li>
              <li>Mentored the intern on our team.</li>
            </ul>
          </div>
        </section>
  
        <section className="resume-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Computer Science (BCS)</h3>
            <p className="date"><a href="https://uwaterloo.ca">University of Waterloo</a>, 2004 - 2009</p>
          </div>
        </section>
      </div>
    );
}