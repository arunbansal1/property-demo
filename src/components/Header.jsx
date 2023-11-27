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
    return <div className='container px-0 pt-2 position-fixed top-0 start-50 translate-middle-x navbar-index'>
        <nav className="navbar navbar-expand-lg navbar-bg py-3 rounded">
            <Link className="navbar-brand me-0 ms-5" to="/">
                <img src="/images/logo.png" className='animated' height='40' alt="hello" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {showSearch && <form className='ms-auto'>
                    <label>
                        <input type="text" className='form-control px-4' onChange={onChangeHandler} placeholder={placeHolder + `'` + currentPlaceholder + `'`} />
                    </label>
                </form>}
                <div className='ms-auto pe-5 fw-bolder'>
                    <ul className="navbar-nav">
                        {showContact && <li className="nav-item text-primary">
                            <Link className="nav-link link" aria-current="page" to="#">Contact</Link>
                        </li>}
                        <li className="nav-item text-primary">
                            <Link className="nav-link link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link" aria-current="page" to="all-properties">Buy/Sell</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link" aria-current="page" to="rentz">Rentz</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link" to="/favourite">Favourite</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
}