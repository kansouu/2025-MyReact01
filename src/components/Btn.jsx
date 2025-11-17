import { Button } from "@mui/material"


// 선언식 
// export default function Btn({name,children}) {
//     return(
//         <Button variant="contained" 
//         onClick={()=>{console.log(name)}}>{children}</Button>
//     )
    
// }

// 표현식
// const Btn =({name,children})=>{
//     return(
//             <Button variant="contained"
//                 onClick={()=>{console.log(name)}}>{children}</Button>
//     )
// }

// export default Btn ;


const Btn =({name,children})=>{
    return(
            <Button variant="contained"        
            //자식 요소 영향 없음      
            //onMouseEnter ={()=>{console.log(name, "onMouseEnter")}}
            //onMouseLeave ={()=>{console.log(name, "onMouseLeave")}}

            //자식 요소에 들어가도 계속 발생함
             onMouseOver ={()=>{console.log(name, "onMouseOver")}}  
             onMouseOut ={()=>{console.log(name, "onMouseOut")}}  

             >{children}</Button>
    )
}

export default Btn ;


// // () 사용 : ()=>(값), 암시적으로 return
// const handleEvent = (name, e) => (
//     console.log(name, e) 
// )
// //{} 사용 : ()=>{...}, 여기 블록 실행, 명시적 return
// const handleEvent2 = (name, e)=>{
//     console.log(name, e)
// }
// // e: 이벤트 객체를 뜻한다.
// const Btn = (name)=>(
//         <Button variant="contained"
//             onClick={(e)=>handleEvent(name, e)}>{name}</Button>
// )

// export default Btn ;
