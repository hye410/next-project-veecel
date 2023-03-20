import { useEffect, useState } from "react";

function Favorite({select}){
  const [selection,setSelection] = useState([]);
  // setSelect([...selection,select])  // -> too many re-render
  useEffect(()=>{
    setSelection([...selection,select])
  },[])
  console.log(selection)
}

export default Favorite;