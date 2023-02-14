import { useState } from "react"

function InputItem({ appendItem }) {
    const [newWork, setNewWork] = useState("")
    return (
        <div>
            할일 :
            <input
                type="text"
                value={newWork}
                onChange={(e) => {
                    setNewWork(e.target.value)
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        // e.preventDefault()
                        appendItem(newWork)
                        setNewWork("")
                    }
                }}
            />
            <button
                onClick={(e) => {
                    appendItem(newWork)
                    setNewWork("")
                }}
            >
                추가
            </button>
        </div>
    )
}
export default InputItem
