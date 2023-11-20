import React, { useEffect, useState } from 'react'

const ApiDatas = () => {

const [api , setApi] = useState([])


useEffect( () =>{
   const url ='https://restcountries.com/v3.1/all'

   fetch(url)
   .then( res => res.json())
   .then( data => setApi(data))

},[])

  return (
    <>
    <div className="main flex gap-10  bg-indigo-400  py-[20px] flex-wrap">

      


    </div>
{
  api.map((item, i)=> {
    return(
      <div key={i} className="item border-2 border-white rounded-sm p-5"> {item.name}</div>
    )
  })

}
    </>
  )
}

export default ApiDatas