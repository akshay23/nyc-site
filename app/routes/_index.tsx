import type { MetaFunction } from "@vercel/remix";
import Resume from '../components/Resume';
import ThemeToggle from '../components/ThemeToggle';

export const meta: MetaFunction = () => {
  return [
    { title: "Akshay Bharath's Resume" }
  ];
};

export default function Index() {
  return (
    <div>
      <ThemeToggle />
      <Resume />
    </div>
  );
}
