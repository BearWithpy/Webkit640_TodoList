import { useState } from "react"
import Car from "./Car"
import Hello from "./Hello"

function AppEx01() {
    const [brandName, setBrandName] = useState("HYUNDAI")
    const [carName, setCarName] = useState("SONATA")

    const [myName, setMyName] = useState("JUNSU")
    const [address, setAddress] = useState("GEOJE")

    const onChangeUserName = () => {
        setMyName("박준수")
    }
    const onChangeAddress = (newAddress) => {
        setAddress(newAddress)
    }

    const assignTest = () => {
        // console.log("assignTest!")
        const target = { a: 1, b: 2 }
        const source = { c: 3, d: 4 }

        // target과 newObj가 같아져버림
        const newObj = Object.assign(target, source)
        console.log(newObj === target)

        return Object.assign(target, source)
    }

    const assignTest2 = () => {
        // console.log("assignTest2() 호출")
        const target = { a: 1, b: 2 }
        const source = [
            { b: 4, c: 5 },
            { b: 6, c: 7, g: 8 },
            { b: 9, c: 10, f: 11 },
            { b: 12, c: 13, d: 14, e: 15 },
        ]

        Object.assign(target, ...source)

        console.log(target)
    }

    const spreadTest = () => {
        const arr = [1, 2, 3, 4, 5]

        const newArr = [...arr, 6]
        console.log(newArr)
    }

    return (
        <>
            <Car brand={brandName} name={carName} />
            <hr />
            <Hello
                name={myName}
                address={address}
                setMyName={onChangeUserName}
                setAddress={onChangeAddress}
            />
            <hr />
            <button
                onClick={(event) => {
                    assignTest()
                }}
            >
                Assign Test
            </button>
            <hr />
            <button
                onClick={(event) => {
                    assignTest2()
                }}
            >
                Assign Test 2
            </button>
            <hr />
            <button
                onClick={(event) => {
                    spreadTest()
                }}
            >
                Spread Test
            </button>
        </>
    )
}

export default AppEx01
