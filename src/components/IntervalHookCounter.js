import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        // setCount(prevCount => prevCount + 1)     // with empty dependency(2nd method)
        setCount(count + 1)    
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])     //[] not needed for 2nd method
    return (
        <div>
            {count}        
        </div>
    )
}

export default IntervalHookCounter
