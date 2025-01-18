import Link from "next/link";
import Dropdown from "../ui/DropdownMenu";
import styles from "../ui/ui.module.css";
export default function Header() {
  return (
    <header className="bg-gray-200 md:absolute z-20 md:flex md:items-center md:justify-evenly pt-8 md:ml-8 md: bg-transparent">
      <div className="flex justify-center font-semibold">
        <Link href="/">
          <span
            style={{ fontFamily: "Pacifico" }}
            className="text-4xl font-thin text-gray-800 hover:text-gray-600 transition-all duration-300 md:mr-40"
          >
            Zeemsa Overseas.
          </span>
        </Link>
      </div>

      <div
        style={{ fontFamily: "Pacifico" }}
        className="hidden md:flex md:justify-evenly md:text-center w-full "
      >
        <Link className={styles.nav} href="/">
          Home
        </Link>
        <Link className={styles.nav} href="/aboutUs">
          About Us
        </Link>
        <Link className={styles.nav} href="/why">
          Why Us
        </Link>
        <Link className={styles.nav} href="/contactUs">
          Contact Us
        </Link>
      </div>
      <div className="md:hidden">
        <Dropdown />
      </div>
    </header>
  );
}
