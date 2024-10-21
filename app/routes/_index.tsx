import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
  return [
    { title: "Akshay Bharath's Site" },
    { name: "description", content: "Welcome, friend!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Go SPURS Go</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=-OvP4UfNKD4&list=PLFW6X-ryKUlG0va1tzgP61VVjku4Liflk"
            rel="noreferrer"
          >
            Tim Duncan - Clutch Moments!
          </a>
        </li>
      </ul>
    </div>
  );
}
