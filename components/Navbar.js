/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

//Şimdi session bilgilerini kullanmayı öğrenelim.
//Öncelikle App js içine girip uygulamamızı sarmalayalım.

export default function Navbar() {
  //Sesiion kullararak bilgilere erişmeyi deneyelim.
  const { data: session, status } = useSession();
  //Öncelikle console yazdırıp sonucu görelim.
  /*

{user: {…}, expires: '2022-09-26T06:51:26.592Z'}
expires: "2022-09-26T06:51:26.592Z"
user:
email: "kubilaybozak@gmail.com"
image: "https://avatars.githubusercontent.com/u/48950686?v=4"
name: "Kubilay Bozak"
[[Prototype]]: Object
[[Prototype]]: Object

konsol çıktısı bu şekilde bir obje dödürüyor şimdi bu obheyi kullanarak ekranda giriş yap kısmını modefiye edelim.

  */

  //Eğer giriş işlemi yapılırken sunucudan yanıt beklendğiği sırada bir loading göstermek istiyorsak
  //Status durumunu kullanmamız gerekiyor eğer statur durumu loading ise butona loading yada ekrana loading dueumları gösdterbilriiz.

  console.log(session);
  if (status === "loading") {
    return <h2>LOADİNG</h2>;
  } else {
    return (
      <div className="w-full bg-black flex flex-row justify-between p-6">
        <div className="text-white font-extrabold text-3xl">
          <h1>
            <a href="#">NextAUTH</a>
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
}
