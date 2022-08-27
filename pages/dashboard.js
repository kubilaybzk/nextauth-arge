import React, { useEffect, useState } from "react";
import Navbar from "components/Navbar";
import { getSession, signIn, useSession } from "next-auth/react";
import Image from "next/image";

//Securing Pages Client-side
/*
Client  tarafından hiçbir kullanıcının giriş yapmadan buraya erişmesini istemiyoruz diyelim.
Öncelikle 
import { getSession} from "next-auth/react"; 
kullanarak session bilgilerine erişelim.


Eğer session 
    varsa 
          ekranda dashboard sayfası 
    yoksa 
          giriş yap kısmına yönlendirmek isteyelim.


//GetSession bize ya session objesi yada null bir obje yolluyor.

*/

export default function Dashboard() {
  const { data: userInfo, status } = useSession();
  //Sadece comp. render edilirken bir kere çalışıyot componentDidMount()
  useEffect(() => {
    const securePage = async () => {
      //GetSession bize ya session objesi yada null bir obje yolluyor.
      const session = await getSession();
      if (!session) {
        signIn();
      }
    };
    securePage();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto w-full pt-20 px-8">
        {userInfo ? (
          <div className="flex flex-row justify-around">
            <div className="w-64 h-64 relative">
              <Image
                src={userInfo.user.image}
                objectFit="cover"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <div className="flex flex-row gap-x-6">
                <h2>UserName:</h2>
                <h2> {userInfo.user.name}</h2>
              </div>
              <div className="flex flex-row gap-x-6">
                <h2>Email:</h2>
                <h2> {userInfo.user.email}</h2>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
