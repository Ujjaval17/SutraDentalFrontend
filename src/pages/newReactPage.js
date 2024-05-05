import React, { useState } from 'react';
import "./newReactPage.css";

const NewReactPage = () => {
    const newArray = ["item1","item2","item3"];
const [intArray, setArray] = useState([1,3,4,5]);

    const addToArr=(arr)=>{
        let temp = [...intArray]
        temp.push(arr[arr.length-1]+arr[arr.length-2]);
        setArray(temp);
    }
    const [toggle, setToggle] = useState(false);
    return (
    <div>
        <button onClick={()=> {setToggle(!toggle); if(toggle){addToArr(intArray);}}}>{toggle ? "ON" : "Off"}</button>
        {
    
        intArray.map((item,index)=>{
            return(

            <ul>
                <li key={index}>
                {item}
                </li>
            </ul>
            )
        })
        }

    </div>
  )
}

export default NewReactPage
