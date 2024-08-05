import { useEffect, useState } from "react";
import ContainerApp from "./component/ContainerApp";
import Loading from "./component/Loading";


function App() {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>setLoading(false),2900)
  },[])
  return (
    <>
    {loading === false ?"":<Loading></Loading>}
    <ContainerApp></ContainerApp>
    </>
  )
}

export default App
