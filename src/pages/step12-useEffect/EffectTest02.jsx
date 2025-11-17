import { useEffect, useState } from "react";

export default function EffectTest02(params) {
    const [data,setData] = useState([]);
        useEffect(()=>{
            //API 호플
            fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
            .then((response)=>{
                if(!response){
                    throw new Error("네트워크 오류");
                }
                return response.json
            })
            .then((data)=>{
                    return setData(data.slice(0,5)) // 0~4개만 보이게
            })
            .catch(error => console.error('Error: ', error))
        },[]);
    return(        
        <div>
            {data.map((k)=>{
                return (
                    <li key={k.id}>
                        <h4> {k.name}</h4>
                        <p>가격 : {k.price} </p>
                        <img src={k.image_link} alt="" width="100px" />
                        </li>
                )
            })}
        </div>
        
    )
}