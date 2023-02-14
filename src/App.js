import { useState } from "react"
import "./App.css"
import LocalStorage from "./components/LocalStorage"
import TodoFrame from "./components/TodoFrame"

function App() {
    const [todoList, setTodoList] = useState([
        {
            no: 1,
            taskText: "점심먹기",
            isDelete: false,
            isDone: false,
        },
        {
            no: 2,
            taskText: "복습하기",
            isDelete: false,
            isDone: false,
        },
        {
            no: 3,
            taskText: "운동하기",
            isDelete: false,
            isDone: false,
        },
    ])
    const [currTodoList, setCurrTodoList] = LocalStorage("todo", todoList)
    // const [count, setCount] = useState(1)
    // const [currTodoCount, setCurrTodoCount] = useState(1)

    const appendItem = (value) => {
        let count = todoList.length + 1
        let currTodoCount = currTodoList.length + 1
        setTodoList([
            ...todoList,
            {
                no: count++,
                taskText: value,
                isDelete: false,
                isDone: false,
            },
        ])

        setCurrTodoList([
            ...currTodoList,
            {
                no: currTodoCount++,
                taskText: value,
                isDelete: false,
                isDone: false,
            },
        ])
    }

    const removeItem = (no) => {
        todoList[no - 1].isDelete = true
        setTodoList([...todoList])

        currTodoList[no - 1].isDelete = true
        setCurrTodoList([...currTodoList])
    }

    // const completeItem = (no) => {
    //     todoList[no - 1].isDone = !todoList[no - 1].isDone
    //     setTodoList([...todoList])

    //     currTodoList[no - 1].isDone = !todoList[no - 1].isDone
    //     setCurrTodoList([...currTodoList])
    // }

    function updateItem(item) {
        //console.dir("updateItem: " + JSON.stringify(item)) ;
        const idx = todoList.findIndex((todo, idx) => {
            return todo.no === item.no
        })
        todoList[idx] = item
        setTodoList([...todoList])
        // console.dir(todoList);

        const idx2 = currTodoList.findIndex((todo, idx) => {
            return todo.no === item.no
        })
        currTodoList[idx2] = item
        setCurrTodoList([...currTodoList])
        //   console.dir(currTodoList);
    }

    ///////////////////////////localStorage -  강사님 코드
    // useEffect(() => {
    //     // localStorage에 데이터가 있으면 로드한다.
    //     // 저장은 문자열로 한다.
    //     console.log(">>>>> useEffect ...")
    //     const localStorageData = localStorage.getItem("todoListData")
    //     if (localStorageData) {
    //         let objData = JSON.parse(localStorageData)
    //         setTodoList(objData.todoList)
    //         setNoCount(objData.noCount)
    //         console.log(">>>>> data load 완료")
    //         console.dir(objData)
    //     }
    // }, [])

    // function saveLocalStorage(newList, noCnt) {
    //     localStorage.setItem(
    //         "todoListData",
    //         JSON.stringify({ todoList: newList, noCount: noCnt }) // 저장은 문자열로 저장
    //     )
    //     console.log(">>>>> localStorage에 저장 완료")
    // }

    // function appendItem(newItem) {
    //     let newList = [
    //         ...todoList,
    //         { no: noCount, title: newItem, done: false },
    //     ]
    //     let noCnt = noCount + 1
    //     setTodoList(newList)
    //     setNoCount(noCnt)
    //     saveLocalStorage(newList, noCnt)
    // }
    // function removeItem(no) {
    //     var newList = todoList.filter((item, idx) => {
    //         return item.no != no
    //     })
    //     setTodoList(newList)
    //     saveLocalStorage(newList, noCount)
    // }

    // function updateItem(item) {
    //     //console.dir("updateItem: " + JSON.stringify(item)) ;
    //     // const idx = todoList.findIndex((todo, idx) => {
    //     //   return todo.no === item.no;
    //     // });
    //     // todoList[idx] = item;
    //     const newList = [...todoList]
    //     setTodoList(newList)
    //     saveLocalStorage(newList, noCount)
    // }

    /////////////////////////////////////////////////////////////

    return (
        <>
            <TodoFrame
                appendItem={appendItem}
                removeItem={removeItem}
                updateItem={updateItem}
                todoList={currTodoList}
                // todoList={todoList}
            />
        </>
    )
}

export default App
