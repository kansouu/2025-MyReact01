export default function SomeEveryCommnetList(params) {
    const comments = [
    {
        name : "홍길동",
        comment : "방가 방가",
        isAdmin : false,
    },
    {
        name : "둘리",
        comment : "호이~ 호이~",
        isAdmin : true,
    },
    {
        name : "도우너",
        comment : "칸따피야",
        isAdmin : false,
    },
    {
        name : "희동이",
        comment : "응~애",
        isAdmin : false,

    },
];
    // some() : or 와 같음 = 만족하는 조건이 하나라도 있으면 true
    // every() : and 와 같음 = 모두 만족해여 true
    const result1 = comments.some(k=>k.isAdmin)
    const result2 = comments.every(k=>k.isAdmin)

    let msg ="";

    return(
        // <>
        //     <h2>관리자 댓글</h2>
        //     <p>관리자 댓글 있냐 ? {result1 ? "있음" : "없음"}</p>
        //     <p>모두 관리자 댓글 있냐 ? {result2 ? "모두 관리자 댓글" : "모두 관리자 댓글 아님"}</p>
        // </>

         <>
            <h2>관리자 상태 </h2>
            <p>관리자 댓글 있냐 ? {result1 ? "있음" : "없음"}</p>
            <p>모두 관리자 댓글 있냐 ? {result2 ? "모두 관리자 댓글" : "모두 관리자 댓글 아님"}</p>
        </>
    )
}
