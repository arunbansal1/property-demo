import { Link } from 'react-router-dom';
import { AiFillEye, AiOutlineHeart } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaBed, FaShower } from 'react-icons/fa';

import { MdEmail } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { useEffect, useState, useContext } from 'react';
import { Context } from './ContextApi';
export default function PropertyCart(props) {
    const { addItemToLike, favProperty } = useContext(Context)
    let singleProp = props.singleProp;
    const [like, setLike] = useState(false);
    const [btnExpand, setBtnExpnad] = useState({
        phoneBtn: false,
        emailBtn: false
    })
    function expandBtn(value){ 
        var d = {
            phoneBtn : false,
            emailBtn : false,
        }
        d[value] = !btnExpand[value];
        // if (!btnExpand[value]) { 
        //     if(btnExpand.phoneBtn || btnExpand.emailBtn){
        //         btnExpand.phoneBtn = false;
        //         btnExpand.emailBtn = false; 
        //     }
        //    btnExpand[value] = true;
        // }else {
        //     btnExpand[value] = false  
        // }              
        setBtnExpnad({...d})
        console.log(btnExpand)
    }
    function onClickLike(singleProp) {
        addItemToLike(singleProp.id)
    }
    // function emailBtnExpand(){
    //     let email = true;
    //     if(email != emailBtn){
    //         setEmailBtn(true)
    //         console.log("ok")
    //     }
    //     else{
    //         setEmailBtn(false)
    //         console.log('not ok')
    //     }
    // }
    // function phoneBtnExpand(){
    //     let phone = true;
    //     if(phone != phoneBtn){
    //         setPhoneBtn(true)
    //         console.log("ok")
    //     }
    //     else{
    //         setPhoneBtn(false)
    //         console.log('not ok')
    //     }
    // }
    useEffect(() => {
        let havePropertyInLocalStorage = false;
        let singlePropertyId = singleProp.id;
        favProperty.forEach((singleStoreData) => {
            if (singlePropertyId == singleStoreData) {
                havePropertyInLocalStorage = true;
            }
        })
        setLike(havePropertyInLocalStorage);

    }, [favProperty]) 
    return <div className='col-sm-6 col-md-6 col-lg-6 col-xl-4'>
        <div className="card my-3 ">
            <img src={"https://themewagon.github.io/property/images/img_1.jpg"} style={{ height: '260px' }} className="card-img-top" alt="image not found" />
            <div className="card-body">
                <h6 className="card-title">{singleProp.title}&nbsp;
                    <Link className='text-decoration-none fs-6 border-0 bg-white text-primary' to={'/property-detail/' + singleProp.id}>See details</Link>
                </h6>
                <div className="card-text">{singleProp.address}, {singleProp.state}, {singleProp.city}</div>
                <div className="card-text"><small className="text-muted">Last updated 3 mins ago</small></div>
                <div className='lh-lg'>Size : {singleProp.size_in_sf_yard}</div>
                <div className='text-secondary'>
                    <span>{<FaBed />} <small>{singleProp.bedrooms}&nbsp;beds</small></span> &nbsp;
                    <span>{<FaShower />} <small>{singleProp.bathrooms}&nbsp;bathroom</small></span>
                </div>
                <h6>Owner : {singleProp.agent.name}</h6>
                <button className='btn btn-outline-danger me-2' onClick={() => { expandBtn('phoneBtn') }}>
                    {btnExpand.phoneBtn ? <span>
                        {singleProp.agent.phone}
                    </span> : <BsFillTelephoneFill />}
                </button>
                <button className='btn btn-outline-warning me-2' onClick={() => { expandBtn('emailBtn') }}>
                    {btnExpand.emailBtn ? <span>
                        {singleProp.agent.email}
                    </span> : <MdEmail />}
                </button>
                <button className='btn btn-outline-primary' onClick={function () { onClickLike(singleProp) }} >
                    {like ? <FcLike /> : <AiOutlineHeart />}
                </button>
            </div>
        </div>
    </div>
}