import 'animate.css';
import { useState, useEffect, useRef } from "react";
export default function Rentz() {
  const [inputValue, setInputValue] = useState("");
  // const [count,setCount] = useState(0);
  const count = useRef(0);
  useEffect(() => {
     count.current = count.current + 1;
  });
  // const onClickHandler = () => {
  //   count.current = count.current + 1;
  // }
  
  return ( 
    <div className='extend-margin'>
      <h4 className='animate__animated animate__fadeInDown text-center'>
        hello welcome to retnz property
      </h4>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
        <h1>Render Count: {count.current}</h1>
        {/* <button onClick={onClickHandler}>click</button> */}
     
    </div>
  )
}