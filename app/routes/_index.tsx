import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
  return [
    { title: "Akshay Bharath's Site" },
    { name: "description", content: "Welcome, friend!" },
  ];
};

export default function Index() {
  return (
    <div style={{
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.8",
      textAlign: "center",
      fontSize: "1.2rem",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px"
    }}>
      {/* Add an image before the heading */}
      <img 
        src="https://media.istockphoto.com/id/1411798446/vector/modern-coming-soon-under-construction-sticker-banner.jpg?s=612x612&w=0&k=20&c=KgQ9eYEfuzTdmc5ypmMYoz8JHPTbe_TjEXxyxNixKQ4=" 
        alt="Construction" 
        style={{ 
          width: "100%",  // Set your desired width
          height: "100%" // Set your desired height
        }} 
      />
      <p style={{ fontSize: "1.5rem" }}>
      In the meantime,&nbsp;
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=-OvP4UfNKD4&list=PLFW6X-ryKUlG0va1tzgP61VVjku4Liflk"
          rel="noreferrer"
        >
          here
        </a>
        &nbsp;are some amazing clutch moments from Tim Duncan. Enjoy!
        </p>
    </div>
  );
}
