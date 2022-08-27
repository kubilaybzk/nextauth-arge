/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div className="w-full bg-black flex flex-row justify-between p-6">
      <div className="text-white font-extrabold text-3xl">
        <h1>
          <a href="/">NextAUTH</a>
        </h1>
      </div>
      <div className="flex flex-row gap-x-5 text-white">
        <div className="flex flex-row w-38 items-center justify-center">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="flex flex-row w-38 items-center justify-center">
          <Link href={"/dashboard"}>Dashboard</Link>
        </div>
        <div className="flex flex-row w-38 items-center justify-center">
          <Link href={"/blog"}>Blog</Link>
        </div>
        {session ? (
          <div className="flex flex-row w-38 items-center justify-center">
            <img
              src={session.user.image}
              className=" rounded-full w-8 h-8 mr-4"
            />
            <span>{session.user.name}</span>
          </div>
        ) : (
          <div className="flex flex-row w-38 items-center justify-center">
            <Link href={"/api/auth/signout"}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign In
              </a>
            </Link>
          </div>
        )}
        {session ? (
          <div className="flex flex-row w-38 items-center justify-center">
            <Link href={"/api/auth/signout"}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
