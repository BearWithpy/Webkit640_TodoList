import { useState } from "react"
import { IoMdAddCircle } from "react-icons/io"

function InputItem({ appendItem }) {
    const [newWork, setNewWork] = useState("")
    return (
        <>
            <div className="flex py-3 text-[#7d99e9] text-4xl">
                TODAY&apos;S TASKS
            </div>
            <form className="flex items-center justify-center">
                <input
                    type="text"
                    value={newWork}
                    className="rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]"
                    placeholder="Add a task for today..."
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
                <IoMdAddCircle
                    // Add an onClick method
                    onClick={(e) => {
                        appendItem(newWork)
                        setNewWork("")
                    }}
                    className="text-[#ea0aff] text-[50px] cursor-pointer ml-[20px] mb-[10px]"
                />
                {/* <button
                onClick={(e) => {
                    appendItem(newWork)
                    setNewWork("")
                }}
            >
                추가
            </button> */}
            </form>
        </>
    )
}
export default InputItem
