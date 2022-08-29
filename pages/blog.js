import Navbar from 'components/Navbar'
import { getSession, useSession } from 'next-auth/react'
import React from 'react'


//Server taraf




export default function Blog(props) {
  const {data}=useSession();

  return (
    <>
    <Navbar/>

      <h1 className='text-3xl'>{props.data}</h1>
      <h2>Dataları server-side olarak alıyoruz.</h2>
    </>
  )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (context) => {
  const session=await getSession(context);
  console.log(session)

  return {
    props: {
        session,
        data:session?"Üyeye özel bloglar":"halka açık bloglar"    
    }
  }
}