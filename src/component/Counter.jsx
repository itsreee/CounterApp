import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset,incrementByAmount } from '../Redux/counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
  const handleIncrementAmount = ()=>{
    if(amount){
  dispatch(incrementByAmount(amount))
    }else{
      alert("please input aa amount")
    }
  }
  return (
   <div className='border rounded p-5  text-center'>
    <h1 style={{fontSize:'100px',fontFamily: "Qwitcher Grypen"}}>{count}</h1>
    <div className="d-flex justify-content-between my-5">
        <button onClick={()=>dispatch(decrement())}  className="btn btn-warning text-light">Decrement</button>
        <button onClick={()=>dispatch(reset())} className="btn btn-danger text-light">Reset</button>
        <button onClick={()=>dispatch(increment())} className="btn btn-success text-light">Increment</button>
    </div>
    <div className='d-flex justify-content-between my-5'>
        <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control' placeholder='Input amount to be incremented' />
        <button onClick={handleIncrementAmount} className="btn btn-primary ms-2" >Increment By Amount</button>
    </div>
   </div>
  )
}

export default Counter