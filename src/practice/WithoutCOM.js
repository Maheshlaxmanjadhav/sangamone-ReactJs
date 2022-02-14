import React, { useState } from 'react';

function WithoutCOM() {
    let [value, setValue] = useState("mahesh");
    async function mj() {
        let response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
        let result = await response.json();
        let p=result.data.map((element,i)=>{
            return <>
            <span>{element.Nation}--</span>
            <span>{element.Year}--</span>
            <span>{element.Population}</span><br/>
            </>
        })
        setValue(p);
    }
    mj();
        return <>{value}</>
}
export default WithoutCOM;