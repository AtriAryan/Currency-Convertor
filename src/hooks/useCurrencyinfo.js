// import { useEffect,useState } from "react";

// function useCurrencyinfo (currency) {
//     const [data,setdata] = useState({})
//     console.log(data);
//         useEffect(() => {
//           fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json`)
//           .then((res) => res.json())
//           .then((res)=> setdata(res[currency]))
//         },[currency])

//         return (data)
        
// }
// export default useCurrencyinfo ;

//custom Hook uper h !

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;