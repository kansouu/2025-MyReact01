
//부모로 부터 onChange 함수(반드시 콜백함수)를 props 로 전달 받음
export default function Profile3({name,status, onChangeStatus}) {
    return(
        <div> 
            <h3>Name : {name} </h3>
            <p>Status : {status}</p>
            <button onClick={()=>onChangeStatus('Away')}>Set Away</button>
            <button onClick={()=>onChangeStatus('Available')}>Set Available</button>
        </div>
    )
}