import Task from "./Task"

function TodoList({ todoList, removeItem, updateItem }) {
    return (
        <ul>
            {todoList.map((item, idx) => {
                return !item.isDelete ? (
                    <Task
                        key={item.no}
                        item={item}
                        removeItem={removeItem}
                        updateItem={updateItem}
                    />
                ) : (
                    <></>
                )
            })}
        </ul>
    )
}

export default TodoList
