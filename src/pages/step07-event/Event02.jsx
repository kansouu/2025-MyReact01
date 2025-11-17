
//children : React 컴포넌트의 특수한 props
// 시작태그와 끝태그 사이의 글자를 말한다.

function AlterButton({message, children}) {
    return(
        <button onClick={()=>(message)}>{children}</button>
    )
}


export default function Event02() {
    return(
        <div>
            <AlterButton message="Play">PlayButton</AlterButton><br />
            <AlterButton message="upload">UploadButton</AlterButton><br />
            <AlterButton message="download">DownloadButton</AlterButton><br />
        </div>

    )
}