import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="w-full bg-black flex flex-row justify-between p-6">
      <div className="text-white font-extrabold text-3xl">
        <h1>
          <a href="#">NextAUTH</a>
        </h1>
      </div>
      <div className="flex flex-row gap-x-5 text-white">
          <div>
            <Link href={"/"}>
              Home
            </Link>
          </div>
          <div>
            <Link href={"/dashboard"}>
              Dashboard
            </Link>
          </div>
          <div>
            <Link href={"/blog"}>
              Blog
            </Link>
          </div>
          <div>
            <Link href={"/#"}>
              Sign In
            </Link>
          </div>
          <div>
            <Link href={"/#"}>
              Sign Out
            </Link>
          </div>

      </div>
    </div>
  );
}
