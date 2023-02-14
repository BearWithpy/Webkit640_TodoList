import { useState } from "react"

function AppEx02() {
    const [fishArr, setFishArr] = useState(["오징어", "꼴뚜기", "명태"])
    const [newFish, setNewFish] = useState("")

    const addFish = (e) => {
        e.preventDefault()
        setFishArr([...fishArr, newFish])
        setNewFish("")
    }

    return (
        <>
            <h1>Hello React</h1>
            <p>
                {/* State 사용시 공식처럼 사용할 것! state와 input 동기화! */}
                <input
                    type="text"
                    value={newFish}
                    onChange={(e) => setNewFish(e.target.value)}
                />
                <button onClick={addFish}>추가</button>
            </p>
            <ul>
                {fishArr.map((item, idx) => {
                    return <li key={idx}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default AppEx02
