import axios from "axios";
import { useEffect, useState } from "react";

function useAPICustomHook(url){ 
    const [data,setData]=useState([]);
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchAPi=async()=>{
            try{
                const response=await axios.get(url);
                setData(response.data);
            }catch(err){
                setError(err.message);
            }finally{
        
                setLoading(false);
            }
        };
        fetchAPi();
    },[]);
    return {data,error,loading};
}
export default useAPICustomHook;