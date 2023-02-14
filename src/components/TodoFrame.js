import InputItem from "./InputItem"
import TodoList from "./TodoList"

const TodoFrame = ({
    appendItem,
    todoList,
    removeItem,
    completeItem,
    updateItem,
}) => {
    return (
        <>
            <h1>Todo List</h1>
            <InputItem appendItem={appendItem} />
            <hr />
            <TodoList
                todoList={todoList}
                removeItem={removeItem}
                updateItem={updateItem}
            />
        </>
    )
}

export default TodoFrame
