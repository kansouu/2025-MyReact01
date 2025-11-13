import Item02 from "./Item02";

export default function List02(params) {
    return (
        <>
            <div>
                <h3>강의 목록</h3>
                <Item02 title='HTML&CSS' content='웹페이지 만들는 지식을 배운다.' />
                <Item02 title='JAVA' content='java 언어를 배운다.' />
                <Item02 title='REACT' content='react 언어를 배운다.' />
            </div>   
        </>
    )
}