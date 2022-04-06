import React, {  useState } from 'react'
import '../App.css';

const Calculator = () => {
    const [input,setInput] = useState(" ");
    const [result,setResult] = useState(" ");
    const handler = e =>{
        setInput(e.target.value);
    }

  return (
    <div>
      <center>
          <div className='mt-5 mb-5'>
          <input type="text"  value={input} name="input" onChange={handler} /><br/>
          {/* {eval(input)} */}
          <button className='btb btn-secondary text-light m-3' onClick={()=>setResult(eval(input))}>Result</button>
          <h4>Result is : {result}</h4>
          <div >
            <button onClick={()=>setInput(input+'1')}>1</button>
            <button onClick={()=>setInput(input+'2')}>2</button>
            <button onClick={()=>setInput(input+'3')}>3</button>
            <button onClick={()=>setInput(input+'4')}>4</button>
            <button onClick={()=>setInput(input+'5')}>5</button> <br/>

            <button onClick={()=>setInput(input+'6')}>6</button>
            <button onClick={()=>setInput(input+'7')}>7</button>
            <button onClick={()=>setInput(input+'8')}>8</button>
            <button onClick={()=>setInput(input+'9')}>9</button>
            <button onClick={()=>setInput(input+'10')}>10</button> <br/>

            <button onClick={()=>setInput(input+'+')}>+</button>
            <button onClick={()=>setInput(input+'-')}>-</button>
            <button onClick={()=>setInput(input+'*')}>*</button>
            <button onClick={()=>setInput(input+'/')}>/</button>
            <button onClick={()=>setInput('')}>clr</button><br/>
          </div>
          </div>
      </center>
      <hr/>
    </div>
  )
}

export default Calculator
