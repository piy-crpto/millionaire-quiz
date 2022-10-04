
import { useState, useEffect } from 'react'

const Timer = (props) => {
    const [timer, setTimer] = useState(60);
    useEffect(() => {
        if (timer === 0) {
            return props.setStop(true);
        }
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [props.setStop, timer]);


    useEffect(() => {
        setTimer(60)
    }, [props.questionNumber])

    return timer;
}

export default Timer