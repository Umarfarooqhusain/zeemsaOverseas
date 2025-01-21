import Link from "next/link";
import Dropdown from "../ui/DropdownMenu";
import styles from "../ui/ui.module.css";

export default function Header() {
  return (
    <header className=" md:absolute z-20 md:flex md:items-center md:justify-evenly pt-8 md:ml-8 md:bg-transparent">
      <div className="flex justify-center font-semibold">
        <Link href="/" aria-label="Zeemsa Overseas Home">
          <span
            style={{ fontFamily: "Pacifico" }}
            className="text-4xl font-thin text-gray-800 hover:text-gray-600 transition-all duration-300 md:mr-40"
          >
            Zeemsa Overseas.
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div
        style={{ fontFamily: "Pacifico" }}
        className="hidden md:flex md:justify-evenly md:text-center w-full"
      >
        <Link className={styles.nav} href="/" aria-label="Navigate to Home">
          Home
        </Link>
        <Link
          className={styles.nav}
          href="/aboutUs"
          aria-label="Learn more About Us"
        >
          About Us
        </Link>
        <Link className={styles.nav} href="/why" aria-label="Why Choose Us?">
          Why Us
        </Link>
        <Link
          className={styles.nav}
          href="/contactUs"
          aria-label="Get in touch with us"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden">
        <Dropdown />
      </div>
    </header>
  );
}
