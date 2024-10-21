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
      <h1 style={{ fontSize: "2.5rem" }}>Under construction</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <p style={{ fontSize: "1.5rem" }}>
        In the meantime,&nbsp;
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=-OvP4UfNKD4&list=PLFW6X-ryKUlG0va1tzgP61VVjku4Liflk"
            rel="noreferrer"
          >
            here
          </a>
          &nbsp;are some Tim Duncan clutch moments. Enjoy!
        </p>
      </ul>
    </div>
  );
}
