import { useEffect, useState } from "react"

//useEffect 는 리액트에서 제공하는 훅 중 하나이다.
//함수형 컴포넌트에서 사이드 이펙트를 처리할 수 있도록 도와 준다.
//사이드이펙트란 컴포넌트의 랜더링 외에 작업(서버의 데이터 가져오기 ,DOM 수정 등)을 의미한다

//useEffect는 상태 변경으로 인해 발생한 랜더링 이후에 실행된다.
// 의존성 배열을 통해 특정 상태나 속성의 변화에만 반응하도록 제한 할 수 있다.
// 의존성 배열이 없으면 갱신할때 마다 (렌더링 할때 마다 호출)
// 의존성 배열이 [] -> 빈 배열이면  처음 한번 하고 다시 호출하지 않음
// 의존성 배열이 [arr1] arr1 이 변경 될 때 마다 호출
// 의존성 배열이 [arr1, arr2] arr1 또는 arr2 이 변경 될 때 마다 호출
//
export default function EffectTest01(params) {
    let cnt = 1;
    const [count,setCount] = useState(1);
    const [count2,setCount2] = useState(1);

    //1. 최초 한번만 실행 (빈 배열 사용)
    useEffect(()=>{
        cnt =cnt+1;
        document.title = `총 ${cnt}번 클릭했습니다.`

    },[]);







    
    return(
        <div>
            <p> 총 {count}번 출력 했습니다.</p>
            <p> 총 {count2}번 출력 했습니다.</p>
            <button onClick={()=>setCount(count+1)}>눌러주세요</button>
            <button onClick={()=>setCount(count2+1)}>눌러주세요</button>
        </div>
    )
}