"use client";

import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (typeof window !== "undefined") {
      if (!window.location.hash || window.location.hash !== "#home") {
        window.location.hash = "#home";
      }
    }

    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "fixed"
      } h-[12vh] z-[10] w-full`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          src="/images/logo.jpg"
          alt="LOGO"
          width={120}
          height={120}
          className="object-contain"
        />

        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((nav) => (
              <Link key={nav.id} href={nav.url}>
                <p className="nav__link cursor-pointer text-white hover:text-blue-500 transition duration-300">
                  {nav.label}
                </p>
              </Link>
            ))}
          </div>

          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
