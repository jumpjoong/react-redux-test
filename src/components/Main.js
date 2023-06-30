import React from 'react'
import "../style/main.scss"
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount, minus, plus } from '../app/counter/countSlice'

function Main() {
  //useSelecoter는 스토어에 있는 상태관리 
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(plus())}>click</button>
      <button onClick={() => dispatch(minus())}>click</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>click</button>
      <span>
        {count}
      </span>
    </div>
  )
}

export default Main