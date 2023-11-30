import { useEffect, useState, useContext } from "react";
import Header from './Header';
import './Style.css';
import { Link } from 'react-router-dom';
import PropertyCart from "./PropertyCart";
import { Context } from './ContextApi'
import Typewriter from "typewriter-effect";

export default function Property() {
    const { properties } = useContext(Context)
    const featuredProperties = [];
    if (properties.length) {
        for (let i = 0; i < 3; i++) {
            const singleProp = properties[i];
            const singlePropHTML = <PropertyCart singleProp={singleProp} key={singleProp.title} />
            featuredProperties.push(singlePropHTML);
        }
    }
    return <div>
        <div className='banner'>
            <div className="App">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString("Welcomes You")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Search Your Property")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Search Your Land")
                        .start()
                    }}
                />
            </div>
        </div>
        <section className="container mt-lg-3">
            <div className='mb-3 mt-4'>
                <h3 className='d-inline'>Popular Property</h3>
            </div>
            <div className='row'>
                {featuredProperties}
            </div>
            <div className='row mt-5'>
                <div className='col-lg-5'>
                    <img src="images/image1.jpeg" width='100%' alt="" />
                </div>
                <div className='col-lg-6 offset-lg-1 property-content'>
                    <h4> What Is Property?</h4>
                    <div className="fs-5">
                    <p>
                        Property is a term describing anything that a person or a business has legal title over,
                        affording owners certain enforceable rights over said items. Examples of property, which may be
                        tangible or intangible, include automotive vehicles, industrial equipment, furniture, and real
                        estate—the last of which is often referred to as "real property."
                    </p>
                    <p>    
                        Most properties hold current or potential monetary value and are therefore considered 
                        to be assets. But properties can simultaneously be liabilities in some situations. Case 
                        in point: if a customer sustains an injury on a company's property, the business owner may 
                        be legally responsible for paying the injured party's medical bills.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
}