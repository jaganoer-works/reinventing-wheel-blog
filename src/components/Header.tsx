import { ThemeToggle } from "./ThemeToggle";

const Header = () => (
  <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex items-center justify-between py-4">
      <h1 className="text-2xl font-bold">車輪の再発明.com</h1>
      <ThemeToggle />
    </div>
  </header>
);

export default Header;
