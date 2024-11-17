import { useState, useEffect } from "react"

export default function Timer() {
    const [time, setTime] = useState(10)

    useEffect(function () {
        const interval = setInterval(function () {
            setTime(time - 1)
            console.log(time)
        }, 1000)
        return function () {
            console.log("cleanup")
            clearInterval(interval)
        }
    })

    return (
        <div>
            {time}
        </div>
    )
}