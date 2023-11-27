import AppLogo from './logo.png';
import './header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    const [state, updateState] = useState("")
    const [finder, updatefinder] = useState('')
    function onChangehandler(event) {
        let inputElem = event.target;
        updateState(inputElem.value)
    }
    function clickhandler() {

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={AppLogo} className='mainLogo' />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={'/'} className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/favourite-property'}>Favourite Property</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 ml-auto" action='/'>
                        <input className="form-control mr-sm-2" type="search" name='q' value={state} onChange={onChangehandler} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={clickhandler} type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}