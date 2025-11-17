import { Button } from "@mui/material";

export default function CounterEx01(params) {
    //리액트에서 화면이 변경 (새 렌더링) 하기 위해서는 상태값이 변경 되었다고
    //리액트에게 알려줘야한다
    console.log("hi")
    let cnt = 5;
    function increment(params) {
        cnt = cnt + 1;
        console.log("cnt : " + cnt);
        
    }
    function decrement(params) {
        cnt = cnt -1;
        console.log("cnt : " + cnt);
    }

    return(
        <>
        <h2>Count : {cnt} </h2>
        <Button variant="outlined" onClick={increment}> + </Button>
        <Button variant="outlined" onClick={decrement}> - </Button>
        </>
    )
}