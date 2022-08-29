import Navbar from "components/Navbar";
import { getSession, useSession } from "next-auth/react";
import React from "react";

//Server tarafından eğer sesion yoksa giriş yap sayfasına return edip
//Giriş yaptıktan sonra tekrar istenen sayfaya yönlendirme işlemi.
//Önce session var mı yok mu kontrol edelim.
//Daha sonra
//Eğer session varsa
//ssr işe sayfayı gösterelim
//Eğer session yoksa
//giriş yap kısmına yönlendirelim.

export default function Blog(props) {
  const { data } = useSession();

  return (
    <>
      <Navbar />

      <h1 className="text-3xl">{props.data}</h1>
      <h2>Dataları server-side olarak alıyoruz.</h2>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  //Session yoksa yani kullanıcı giriş yapmamış ise.

  if (!session) {
    //kullanıcı girişi yok:
    return {
      redirect: {
        //iki adet key alıyor
        //destination çalışcak api diyebiliriz.
        /*
permanent true or false 
true ise istemcilere/arama motorlarına yönlendirmeyi sonsuza kadar önbelleğe alma talimatı veren 308 durum kodunu kullanır, 
false ise geçici olan ve önbelleğe alınmamış 307 durum kodunu kullanır.
        */
        destination: `api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanet: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "Üyeye özel bloglar" : "halka açık bloglar",
    },
  };
};
