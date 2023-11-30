import { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PropertyCart from './PropertyCart';
import Header from './Header';
import React from 'react';
// import useHook from './customeHook/UseHook';
import { Context } from './ContextApi';

export default function Favourite() {
    const { properties,favProperty }  = useContext(Context)
    // const [counter, clickButton]  = useHook(0)
    let property = [];
    properties.forEach((singleProperty)=>{
        let prodID = singleProperty.id.toString();
        if(favProperty.indexOf(prodID) != -1 ){
            property.push(singleProperty)
        } 
    })
    let likeProperties = property.map((sProperty) => {
        return <PropertyCart key={sProperty.id} singleProp={sProperty} />
    })
    return (
        <div className='extend-margin'>
        {/* <button onClick={clickButton}>Counter {counter}</button> */}
        <div className='container'>
            <div className='row'>
                {likeProperties}    
            </div>
        </div>
        </div>
    )
}
