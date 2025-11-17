//메테리얼 디자인 : 구글이 모바일, 데스크톱 등 다양한 기기에서 일관되고 직관적인 사용자 경험을 제공하는 목적으로
// 시각적인 디자인 언어 및 가이드라인 제공
//MUI는 주로 React 기반의 UI 컴포넌트 라이브러리인 Material UI
//설치 : npm install @mui/material @emotion/react @emotion/styled

import { Button } from "@mui/material";

//자습서 : https://mui.com/material-ui/react-button/
export default function Event03(params) {
    function handleClick() {
        console.log("event-1");
    }

    return(
        <>
            <Button variant="text" onClick={handleClick}>Text</Button>
            <Button variant="contained" onClick={()=>{console.log("event-2");}}>Contained</Button>
            <Button variant="outlined" disabled >Outlined</Button>
        </>
    )
}