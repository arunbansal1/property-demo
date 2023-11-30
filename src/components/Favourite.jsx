import { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PropertyCart from './PropertyCart';
import Header from './Header';
import React from 'react';
import {Link} from "react-router-dom";
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
    let noProperyContent = likeProperties.length == 0;
    return (
        <div className='extend-margin'>
            {
                noProperyContent && <div className='container-fluid'>
                    <div className='no-favourite'>
                    <div className='text-center'>
                                <img src="images/broken-heart.png" />
                            </div>
                        <h3 className='mt-3'>
                            You have not selected any property as favourite, please goto the <Link to="/all-properties">property page</Link> and click on heart icon to save it into favourite list.
                        </h3>
                    </div>        
                </div>
            }
        {/* <button onClick={clickButton}>Counter {counter}</button> */}
        <div className='container'>
            <div className='row'>
                {likeProperties}    
            </div>
        </div>
        </div>
    )
}
