
import AppLogo from '../logo.png';
import './header.css'
import { useState }  from 'react';
export default function Header() {
    const [state,updateState] = useState("")
    function onChangehandlerr(event){
        let inputElem = event.target;
        updateState(inputElem.value)
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

                    <form className="form-inline my-2 my-lg-0 ml-auto" action='/'>
                        <input className="form-control mr-sm-2" type="search" name='q' value={state} onChange={onChangehandler} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={} type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}