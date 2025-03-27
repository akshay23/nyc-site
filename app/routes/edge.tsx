import type { LinksFunction, MetaFunction } from "@vercel/remix";
import Resume from '../components/Resume';

export const config = { runtime: "edge" };

export const meta: MetaFunction = () => [{ title: "Akshay Bharath's Resume" }];

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
  },
];

export default function Edge() {
  return (
    <div>
      <Resume />
    </div>
  );
}
