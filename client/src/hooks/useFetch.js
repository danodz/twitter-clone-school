import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [response, setResponse] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(res.ok){
                return res.json()
            }else
                setStatus("error")
        })
        .then((res)=>{
            if(res){
                setResponse(res);
                setStatus("success")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [url])

    return [response, status];
}

export default useFetch;