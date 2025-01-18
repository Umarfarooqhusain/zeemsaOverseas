"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./ui.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.hamburgerButton}>
        <div className={`${styles.icon} ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <GiHamburgerMenu size={30} />
          )}
        </div>
      </button>
      <div
        style={{ fontFamily: "Dancing Script" }}
        onClick={closeMenu}
        className={`${styles.dropdownMenu} ${isOpen ? styles.show : ""} `}
      >
        <Link href="/">Home</Link>
        <Link href="/aboutUs">About</Link>
        <Link href="/why">Why Us</Link>

        <Link href="/contactUs">Contact Us</Link>
      </div>
    </div>
  );
}

export default Dropdown;
