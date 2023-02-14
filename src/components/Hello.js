// 객체나 리스트의 요소를 바로 끄집어내어 사용 => 구조분해 할당
const Hello = ({ name, address, setMyName, setAddress }) => {
    return (
        <h1>
            Hello {name} from {address}
            <br />
            <button onClick={setMyName}>이름 바꾸기</button>
            <br />
            <button
                onClick={() => {
                    setAddress("울산")
                }}
            >
                주소 바꾸기
            </button>
        </h1>
    )
}

export default Hello
