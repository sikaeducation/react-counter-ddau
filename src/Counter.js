import { useState } from "react"
import CounterDisplay from "./CounterDisplay"
import CounterButton from "./CounterButton"

const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  return (
    <div className="Counter">
      <CounterDisplay count={count} />
      <CounterButton increment={increment} />
    </div>
  )
}

export default Counter
