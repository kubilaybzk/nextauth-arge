import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

//Bu js dosyası tüm global NextAuth.js yapılandırmalarınızı da içerecek olan NextAuth.js için dinamik yol işleyicisini içerir.

export default NextAuth({
  //bir kaç adet key içerir.
  //birisi providers.
  //Örneğimize Github api kullanarak başlayalım.
  providers: [
    GithubProvider({
      //Github api iki adet bilgi istiyor bizden birisi id birisi secret.
      //Bu bilgilere erişmek için github sayfamıza gidelim.
      //https://github.com/settings/applications/new
      //Formu dolduralım ve clientID client screet bilgilerimizi alalım.
      //Bu bilgileri env.local isimli bir dosya oluşturup içine yazalım.
      //Daha sonra bu bilgileri assign edip
      //projeyi kapatıp yeniden başlatalım.
      //daha sonra http://localhost:3000/api/auth/signin adresine gelim ve sonucu görelim.

      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
