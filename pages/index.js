import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';

export default function Home() {

  const {isAuthenticated, logout} = useMoralis();

  if (!isAuthenticated) return <Login />


  return (
    <div className="h-screen">
      <Head>
       <title>Metaverse Challenge</title> 
      </Head>
    <h2>METAVERSE CHALLENGE</h2>
    <button onClick={logout}>Logout</button>
    </div>
  )
}


