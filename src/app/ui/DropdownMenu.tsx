"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./ui.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.dropdown} aria-label="Main Navigation">
      <button
        onClick={toggleDropdown}
        className={styles.hamburgerButton}
        aria-expanded={isOpen}
        aria-label="Toggle Menu"
      >
        <div className={`${styles.icon} ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <GiHamburgerMenu size={30} />
          )}
        </div>
      </button>

      <ul
        className={`${styles.dropdownMenu} ${isOpen ? styles.show : ""}`}
        style={{ fontFamily: "Dancing Script" }}
      >
        <li onClick={closeMenu}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/aboutUs">About</Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/why">Why Us</Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/contactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
