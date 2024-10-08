import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="font-semibold text-[30px]">
            Fynn<span className="text-accent">.</span>{" "}
          </h1>
        </Link>

        {/*desktop navbar & hire me btn*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile navbar */}
        <div className="xl:hidden"><MobileNav/></div>

      </div>
    </header>
  );
};

export default Header;
