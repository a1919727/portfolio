import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const logoFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-border/100 bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-8xl items-center justify-between gap-4 px-4 py-4 sm:px-6 md:gap-8 md:py-5 lg:gap-12 lg:px-10">
        <Link
          href="/"
          aria-label="home"
          className={`${logoFont.className} text-foreground inline-flex shrink-0 items-center text-2xl font-semibold transition-colors hover:text-primary sm:text-3xl lg:text-4xl`}
        >
          Judy
        </Link>
        <nav className="text-muted-foreground flex items-center justify-end gap-3 text-xs font-medium sm:gap-5 sm:text-sm md:gap-8 md:text-base lg:gap-10 lg:text-lg">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/projects" className="transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/techstack" className="transition-colors hover:text-primary">
            Tech stack
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
