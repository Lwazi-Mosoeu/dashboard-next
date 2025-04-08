import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";

const routes = [
  {
    href: "/",
    label: "Products",
  },
  {
    href: "/",
    label: "Categories",
  },
  {
    href: "/",
    label: "On Sale",
  },
];

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 item-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Store Name</h1>
            </Link>
          </div>
          {/*<nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block"></nav>*/}
          <nav className="mx-6 hidden md:flex items-center space-x-4 lg:space-x-6">
            {routes.map((route, i) => (
              <Button asChild variant="ghost">
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
