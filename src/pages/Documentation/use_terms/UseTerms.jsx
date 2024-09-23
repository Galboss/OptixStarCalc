import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import useMarkdown from "../../../tools/hooks/useMarkdown";
import md from "../../../docs/useterms.md"

function UseTerms() {

    // const [MD,setMD]=useState('');
    // useEffect(()=>{
    //     fetch(md).then((res)=>res.text()).then((txt)=>setMD(txt))
    // })
    const {content} = useMarkdown(md);
    return (
        <>
            <Markdown>
                {content}
            </Markdown>
        </>
    );
}

export default UseTerms;