import type { MetaFunction } from "@vercel/remix";
import type { LinksFunction } from "@remix-run/node"; 
import Resume from '../components/Resume';

export const meta: MetaFunction = () => {
  return [
    { title: "Akshay Bharath's Resume" }
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
  },
];

export default function Index() {
  return (
    <div>
        <Resume />
    </div>
  );
}
