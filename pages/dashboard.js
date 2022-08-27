import React, { useEffect, useState } from "react";
import Navbar from "components/Navbar";

import { getSession, signIn } from "next-auth/react";

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


  const [loading,setLoading]=useState(false);


  //Sadece comp. render edilirken bir kere çalışıyot componentDidMount()
  
  useEffect(() => {
    const securePage=async()=>{

//GetSession bize ya session objesi yada null bir obje yolluyor.
      const session=await getSession();
      if(session){

      }
      else{
        signIn();
      }
    }  
    securePage();
  },[]);


  return (
    <>
      <Navbar />
      {getSession ? "var" : "yok"}
    </>
  );
}
