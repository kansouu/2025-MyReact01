import { Button } from "@mui/material";
import { useState } from "react";

function createInitTodos(params) {
    const initTodos = [];
        for (let i = 0; i < 5; i++) {
            initTodos.push({id:1, text : 'Item' + (i+1)})
            
        }
        return initTodos ;
}

export default function CounterEx07(params) {
    // usestate 초기값을 function 사용
    const[todos, setTodos] = useState(createInitTodos);
    const[msg, setMsg] = useState('');

    function  handleDelete(id) {
        setTodos(todos.filter(k=>k.id !== id))
        
    }
    return(
        <>
            <input value={msg} onChange={(e)=>{setMsg(e.target.value)}} />
            <Button onClick={()=>{
                setMsg('');
                setTodos([...todos,{id : todos.lenght, text: msg}]);
            }}>추가하기</Button>

            <ul>
                {todos.map(k=> (
                    <li key={k.id}>{k.msg}
                    <button onClick={()=>{handleDelete(k.id)}}>삭제하기 </button></li>
                    
                ))}
            </ul>
        </>

    )
}