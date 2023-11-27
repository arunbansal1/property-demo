import { Link, useParams } from "react-router-dom"
import axios from 'axios';
import { FaBed, FaShower } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useState, useEffect , useContext } from 'react';
import Header from './Header';
import { Context } from "./ContextApi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCore, { Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
SwiperCore.use([Autoplay, Pagination, Navigation]);
export default function PropertyDetails() {
    let params = useParams();
    let { properties,showContactHandler,hideContact } = useContext(Context)
    const [property, updateProperty] = useState({});
    const [isloading, setLoading] = useState(true);
    let singleProperty = {};
    useEffect(()=>{
        properties.forEach((singleProp)=>{
            if(singleProp.id == params.propertyId){
                singleProperty = singleProp;
            }
        })
        updateProperty(singleProperty)
        setLoading(false)
        showContactHandler()
        return function(){
            hideContact()
        }
    },[])
    const singlePropertyHTML = <div className='mt-4 container'>
        <h3 className='text-warning text-opacity-50'>Check My Property</h3>
        <div className='row'>
            <div className='col-sm-12 col-lg-4 col-md-4 me-4 px-0'>
                <Swiper 
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination   
                >
                    <SwiperSlide>
                        <img src={"https://themewagon.github.io/property/images/img_1.jpg"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/home-1.jpeg' style={{ height: 500, width:'100%' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/home-2.jpeg' style={{ height: 500, width: '100%' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/home-3.jpeg' style={{ height: 500, width: '100%' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/home-4.jpeg' style={{ height: 500, width: '100%' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/home-5.jpeg' style={{ height: 500, width: '100%' }} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='col-sm-12 col-lg-7 col-md-7 mt-4 text-start'>
                <h3>{property.title}</h3>
                <h5 className='text-info'>{property.agent?.name}</h5>
                <h6>{property.address},{property.city},{property.state},{property.country}</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem distinctio veniam soluta laboriosam quam,
                    culpa porro, facere totam commodi facilis consectetur asperiores vitae. Error exercitationem quas quaerat,
                    libero magnam numquam.
                </p>
                <div className='text-secondary'>
                    <span>{<FaBed />} <small>{property.bedrooms}&nbsp;beds</small></span> &nbsp;
                    <span>{<FaShower />} <small>{property.bathrooms}&nbsp;bathroom</small></span>
                </div>
                <p>Property Size: {property.size_in_sf_yard}</p>
                <Link className='text-decoration-none text-success'>
                    <BsFillTelephoneFill />
                    {property.agent?.phone}
                </Link>
                <Link className='text-decoration-none ms-3 text-warning'>
                    <MdEmail />&nbsp;
                    {property.agent?.email}
                </Link>
            </div>
        </div>
    </div>
    return <div className='text-center bg-dark text-white pb-5' style={{paddingTop:'80px'}}>
        {isloading && <p className='mt-2 alert alert-warning'>please wait, we are getting properties for your</p>}
        <div>{singlePropertyHTML}</div>
    </div>
}