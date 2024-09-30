import React from "react";
import { useEffect } from "react";

function useHistoryPopState(callback){

    useEffect(()=>{
        const handlePopState=(event)=>{
            callback(window.location.pathname,event);
        };
        window.addEventListener('popstate',handlePopState);

        return () =>{
            window.removeEventListener('popstate',handlePopState);
        };
    },[callback]);
};

export default useHistoryPopState;