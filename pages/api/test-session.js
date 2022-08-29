import { getSession } from "next-auth/react"

const handler=async(req,res)=>{
    /*
 request=> req olayı yükselten HTTP isteği hakkında bilgi içeren bir nesnedir. req cevaben,
 response=>res istediğiniz HTTP cevabını geri göndermek için res kullanırsınız

    */

    const session=await getSession({req});
    if(!session){
        res.status(401).json({error:"Giriş Yapılmamış"})
    }
    else{
        res.status(200).json({message:"Giriş Yapılmış",session})
    }
    
}
export default handler;