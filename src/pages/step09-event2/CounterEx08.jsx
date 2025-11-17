import { Button } from "@mui/material";
import { useState } from "react";

export default function CounterEx08(params) {
    const [isPinned, setPinned] = useState(false);
    const togglePinned = () =>{
        // 토글 : 참 거짓이 이벤트 일어날때 마다 반대로
        setPinned(!isPinned)
    }

    //위에 const 를 funcion 으로 바꾼것 위를 더 많이 씀
    // function togglePinned2(params) {
    //     return setPinned(!isPinned);
    // }

    return(
        <>
            <Button variant="outlined" onClick={togglePinned}>
                체크유무 {isPinned && 'v'}</Button>
            
        </>
    )
}