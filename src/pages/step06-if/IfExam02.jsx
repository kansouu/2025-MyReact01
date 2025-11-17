
    // && 연산 (AND 연산)
    // 왼쪽이 true 이면 오른쪽이 반환된다.
    // 왼쪽이 false이면 아무것도 반환되지 않음
    // 왼쪽에 숫자를 두지 말자


    // || 연산 (OR 연산)
    // 왼쪽이 true 이면 왼쪽 반환된다.
    // 왼쪽이 false 이면 오른쪽이 반환된다.

// export default function IfExam02(name, isPacked) {

//     return  <li>{name} + {isPacked && "체크 0"} </li>
   
    
// }


// 왼쪽이 문자열 문자열 이면 왼쪽 문자열이 반환
// 왼쪽 문자열이 빈 문자열("")이면 아무것도 반환하지 않는다.
export default function IfExam02({name, isPacked}) {
        const chk = ""
        
        return(
            <li>{name}{chk || "체크 O"}</li>
        )
}

