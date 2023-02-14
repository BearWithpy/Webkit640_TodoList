import { useState } from "react"

function Task({ item, removeItem, updateItem }) {
    // const [isChecked, setIsChecked] = useState(false)
    // const [modified, setModified] = useState(false)
    // const [taskText, setTaskText] = useState(item.taskText)

    // useEffect(() => {
    //     setIsChecked(item.isDone)
    //     setTaskText(item.taskText)
    // }, [item])

    // return (
    //     <li>
    //         <p>
    //             <input
    //                 type="checkbox"
    //                 checked={isChecked}
    //                 onChange={(e) => {
    //                     completeItem(item.no)
    //                     updateItem(item)
    //                     setIsChecked(item.isDone)
    //                 }}
    //             />

    //             <input
    //                 type="text"
    //                 className={item.isDone ? "checked" : ""}
    //                 onChange={(e) => setTaskText(e.target.value)}
    //                 value={item.taskText}
    //                 disabled={!modified ? "disabled" : ""}
    //             />

    //             <button
    //                 onClick={(e) => {
    //                     setModified(!modified)
    //                     if (modified) {
    //                         item.taskText = taskText
    //                         updateItem(item)
    //                     } else {
    //                     }
    //                 }}
    //             >
    //                 {!modified ? "수정" : "수정 완료"}
    //             </button>
    //             <button onClick={(e) => removeItem(item.no)}>삭제</button>
    //         </p>
    //     </li>

    const [mode, setMode] = useState(false)
    const [taskText, setTaskText] = useState(item.taskText)
    return (
        <li>
            <p>
                <input
                    type="checkbox"
                    checked={item.isDone ? "checked" : ""}
                    onChange={(e) => {
                        item.isDone = e.target.checked
                        updateItem(item)
                    }}
                />
                <input
                    value={taskText}
                    onChange={(e) => {
                        setTaskText(e.target.value)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setMode(!mode)
                            if (mode) {
                                item.taskText = taskText
                                updateItem(item)
                            } else {
                            }
                        }
                    }}
                    className={item.isDone ? "checked" : ""}
                    type="text"
                    disabled={mode ? "" : "disabled"}
                />
                <button
                    onClick={(e) => {
                        removeItem(item.no)
                    }}
                >
                    삭제
                </button>
                <button
                    onClick={(e) => {
                        setMode(!mode)
                        if (mode) {
                            item.taskText = taskText
                            updateItem(item)
                        } else {
                        }
                    }}
                >
                    {mode ? "수정완료" : "수정"}
                </button>
            </p>
        </li>
    )
}

export default Task