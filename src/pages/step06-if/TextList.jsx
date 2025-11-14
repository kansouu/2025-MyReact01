export default function TextList(params) {
        const people = [{
            id: 0,
            name: 'Creola Katherine Johnson',
            profession: 'mathematician',
        }, {
            id: 1,
            name: 'Mario José Molina-Pasquel Henríquez',
            profession: 'chemist',
        }, {
            id: 2,
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
        }, {
            id: 3,
            name: 'Percy Lavon Julian',
            profession: 'chemist',
        }, {
            id: 4,
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
        }];

        // ==는 이름이 같은것
        // ===는 자료 형까지 같은걸 찾는다
        const result = people
        .filter(k=>k.profession === 'chemist')
        .map((k)=>{
            return <li>{k.name}({k.profession})</li>
        })

        return(
            <ul>{result}</ul>
        )
}