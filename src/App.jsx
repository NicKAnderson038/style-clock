import { useState, useEffect } from 'react'
import './App.css'

function getHours() {
    let h = new Date().getHours()
    h = h % 12
    h = h ? h : 12 // the hour '0' should be '12'
    return h < 10 ? '0' + h : h
}

function getMinutes() {
    const m = new Date().getMinutes()
    return m < 10 ? '0' + m : m
}

function getSeconds() {
    const s = new Date().getSeconds()
    return s < 10 ? '0' + s : s
}

function getPeriod() {
    const h = new Date().getHours()
    return h >= 12 ? 'PM' : 'AM'
}

function App() {
    const [hour, setHour] = useState(getHours())
    const [minutes, setMinutes] = useState(getMinutes())
    const [second, setSecond] = useState(getSeconds())
    const [period, setPeriod] = useState(getPeriod())

    useEffect(() => {
        let ignore = false
        let intervalId
        if (!ignore) {
            intervalId = setInterval(showTime, 1000)
        }
        return () => {
            ignore = true
            clearInterval(intervalId)
        }
    }, [])

    function showTime() {
        setHour(getHours())
        setMinutes(getMinutes())
        setSecond(getSeconds())
        setPeriod(getPeriod())
    }

    return (
        <>
            <div className="wrapper">
                <div className="text">Glass Morphisms Clock</div>
                <div className="time">
                    <div className="left-side">
                        <span className="hour">{hour}</span>
                    </div>
                    <div className="right-side">
                        <span id="dots">:</span>
                        <span className="minutes">{minutes}</span>
                    </div>
                    <div className="right-down">
                        <span className="period">{period}</span>
                        <span className="second">{second}</span>
                    </div>
                </div>
            </div>
            <div className="box first"></div>
            <div className="box seconds"></div>
        </>
    )
}

export default App
