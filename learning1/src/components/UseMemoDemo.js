import React from 'react'

const UseMemoDemo = () => {
  const[counter,setCounter] = React.useState(0);
  const[number,setNumber] = React.useState(1);
  const Factorial = React.useMemo(()=>
      fact(number)
  ,[number])
  return (
    <div>
        <center>
            Factorial : {Factorial}<br/>
            <button className='btn btn-primary' onClick={()=>setNumber(number+1)}>Number Increment</button> <br/>
            <button className='btn btn-primary' onClick={()=>setCounter(counter+1)}>Counter Increment</button> <br/>
            counter : {counter}
        </center>
    </div>
  )
}

const fact = (n) =>{
    let answer = 1;
    for(var i=n;i>=1;i--){
        answer = answer * i;
    }
    console.log('Factorial function calling');
    return answer;
}

export default UseMemoDemo;
