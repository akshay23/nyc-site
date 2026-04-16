import type { MetaFunction } from "@vercel/remix";
import "../styles/KiddoLoggerSupport.css";

export const meta: MetaFunction = () => {
  return [{ title: "KiddoLogger Support" }];
};

export default function KiddoLoggerSupport() {
  return (
    <div className="support-page">
      <h1>KiddoLogger Support</h1>
      <p>
        Have a question or running into an issue? Fill out the form below and
        we'll get back to you as soon as possible.
      </p>

      <form
        className="support-form"
        action="https://formsubmit.co/kiddologger.support@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="KiddoLogger Support Request" />
        <input type="hidden" name="_next" value="https://akshaybharath.nyc/kiddologger-support" />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
