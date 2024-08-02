import { useEffect, useState } from "react";
import ContainerApp from "./component/ContainerApp";
import Loading from "./component/Loading";


function App() {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>setLoading(false),2000)
  },[])
  return (
    <>
    {loading === false ? (<ContainerApp/>):(<Loading/>)}
    <div >
      <ContainerApp/>
    </div>
    </>
  )
}

export default App
