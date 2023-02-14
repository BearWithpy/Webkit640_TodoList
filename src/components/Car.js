import React from "react"

function Car(props) {
    return (
        <div>
            <h1>
                {/* 주석 */}I am a {props.brand} {props.name}
            </h1>
        </div>
    )
}

export default Car
