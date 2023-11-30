import 'animate.css';
import { Context } from './ContextApi';
import { useContext } from 'react';
// import { useState, useEffect, useRef } from "react";
export default function Rentz() {
  const { properties } = useContext(Context);
  console.log(properties)
  // console.log(properties)
  // const [inputValue, setInputValue] = useState();
  // const [count,setCount] = useState(0);
  // const count = useRef(0);
  // useEffect(() => {
  //    count.current = count.current + 1;
  // });
  // const onClickHandler = () => {
  //   count.current = count.current + 1;
  // }
  const RentxProperty = properties.map((singleRentzProperty) => {
    return <div class="row row-cols-2 row-cols-md-2 g-4">
    <div class="col">
      <div class="card">
        <img src="images/pexels-emre-can-acer-2079246.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="images/pexels-emre-can-acer-2079246.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
  })
  return (
    <div className='extend-margin container'>
      <h4 className='animate__animated animate__fadeInDown text-center'>
        hello welcome to retnz property
      </h4>
      <div className='row'>
        {RentxProperty}
      </div>
      {/* <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      /> */}
      {/* <h1>Render Count: {count.current}</h1> */}
      {/* <button onClick={onClickHandler}>click</button> */}

    </div>
  )
}