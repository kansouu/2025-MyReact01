import { TextField } from '@mui/material'
import './inputExam.css'

export default function InputExam(params) {
    return(
        //className은 css에서 class를 뜻한다.
        // TextField 이벤트 처리는 onChange로 처리한다.
        <div>
            <inpur onFocus={()=>console.log("onFocus")}
                onBlur={()=>console.log("onBlur")}
                className="bgColor"
                /><br /><br />
                 <TextField id="outlined-basic" label="Outlined" variant="outlined" 
                 onChange={(e)=>console.log(e.target.value )} />
                 <TextField id="filled-basic" label="Filled" variant="filled" 
                 onKeyUp ={(e)=>console.log(e.target.value + "," + e.key)} />
                 <TextField id="standard-basic" label="Standard" variant="standard" 
                  />
        </div>
    )
}