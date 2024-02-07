// "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

function Navbar() {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="flex justify-between items-center max-w-[1440px] sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-between items-center">
          <Image
            src="/logo.svg"
            alt="CarHub logo"
            width={120}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton title="Sign in"
        btnType="button"
        containerStyles="text-primary-blue bg-white rounded-full min-w-[130px]"
        />
      </nav>
    </header>
  );
}

export default Navbar;
