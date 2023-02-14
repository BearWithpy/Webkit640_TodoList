import InputItem from "./InputItem"
import TodoList from "./TodoList"

const TodoFrame = ({ appendItem, todoList, removeItem, updateItem }) => {
    return (
        <div
            div
            className="flex w-[70%] bg-[#354ea3] py-4 px-9 rounded-[30px] overflow-y-scroll"
        >
            <div className=" flex justify-center py-6">
                <InputItem appendItem={appendItem} />

                <TodoList
                    todoList={todoList}
                    removeItem={removeItem}
                    updateItem={updateItem}
                />
            </div>
        </div>
    )
}

export default TodoFrame
