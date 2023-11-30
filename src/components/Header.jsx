import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { Context } from './ContextApi';
import './Style.css';
export default function Header(props) {
    const showSearch = props.showSearch;
    const showContact = props.showContact;
    const { searchResult, setSearchResult } = useContext(Context)
    var [currentPlaceholder, setCurrentPlaceholder] = useState('sell/buy');
    var placeholders = ['Property', 'Flats', 'Kothi', 'villa', 'Land'];
    const changePlaceholder = () => {
        const currentIndex = placeholders.indexOf(currentPlaceholder);
        const nextIndex = (currentIndex + 1) % placeholders.length;
        setCurrentPlaceholder(placeholders[nextIndex]);
    };
    useEffect(() => {
        const intervalId = setInterval(changePlaceholder, 2000);
        return () => clearInterval(intervalId);
    }, [currentPlaceholder])
    var placeHolder = "Search Your ";
    function onChangeHandler(e) {
        let inputElem = e.target.value;
        setSearchResult(inputElem)
    }
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className='container-fluid'>
            <Link className="navbar-brand ms-lg-5 me-0" to="/">
                <img src="/images/logo.png" className='animated' height='40' alt="hello" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {showSearch && <form className='ms-5'>          
                    <input type="text" className='form-control ms-4' onChange={onChangeHandler} placeholder={placeHolder + `'` + currentPlaceholder + `'`} />               
            </form>}
            <div className="collapse navbar-collapse me-5" id="navbarNav">
                    <ul className="ms-lg-auto navbar-nav text-sm-center">
                        {/* {showContact && <li className="nav-item text-primary">
                            <Link className="nav-link link" aria-current="page" to="#">Contact</Link>
                        </li>} */}
                        <li className="nav-item text-primary">
                            <Link className="nav-link link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link" aria-current="page" to="all-properties">Buy/Sell</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link link" aria-current="page" to="rentz">Rentz</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link link" to="/favourite">Favourite</Link>
                        </li>
                    </ul>
                
            </div>
            </div>
        </nav>

    </div>
}