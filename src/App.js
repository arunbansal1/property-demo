import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { react, useState } from 'react';
import { PropertyContext } from './context/propertyContext.jsx';
import PropertyList from './components/properties/propertyList.jsx';
import ProperyDetails from './components/properties/properyDetails.jsx';
import Header from './common/header.js';
import Banner from './components/Banner/Banner.jsx'; import Favourite from './components/properties/favourite.jsx';

function App() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Spacious Villa with Pool",
      location: "Miami, FL",
      price: "7,50,000",
      bedrooms: 4,
      bathrooms: 3,
      area: 3000,
      type: "House",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 2,
      title: "Modern Condo in the City Center",
      location: "New York, NY",
      price: 450000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      type: "Condo",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 3,
      title: "Luxury Apartment with Ocean View",
      location: "Los Angeles, CA",
      price: 1100000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      type: "Apartment",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 4,
      title: "Cozy Townhouse in the Suburbs",
      location: "Chicago, IL",
      price: 320000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1600,
      type: "Townhouse",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 5,
      title: "Charming Cottage with Garden",
      location: "San Francisco, CA",
      price: 550000,
      bedrooms: 2,
      bathrooms: 1,
      area: 1000,
      type: "House",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 6,
      title: "Elegant Penthouse with Rooftop Terrace",
      location: "Seattle, WA",
      price: 990000,
      bedrooms: 3,
      bathrooms: 3,
      area: 2500,
      type: "Apartment",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 7,
      title: "Lakefront Mansion with Private Dock",
      location: "Orlando, FL",
      price: 1850000,
      bedrooms: 5,
      bathrooms: 6,
      area: 6000,
      type: "House",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 8,
      title: "Modern Loft in Trendy Neighborhood",
      location: "Brooklyn, NY",
      price: 680000,
      bedrooms: 1,
      bathrooms: 1,
      area: 800,
      type: "Apartment",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 9,
      title: "Quaint Farmhouse with Acreage",
      location: "Portland, OR",
      price: 420000,
      bedrooms: 3,
      bathrooms: 2,
      area: 2000,
      type: "House",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 10,
      title: "Modern Beachfront Villa",
      location: "Malibu, CA",
      price: 3500000,
      bedrooms: 6,
      bathrooms: 4,
      area: 5000,
      type: "House",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 11,
      title: "Luxury Condo with Skyline Views",
      location: "San Diego, CA",
      price: 1200000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1600,
      type: "Condo",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 12,
      title: "Cozy Cabin in the Woods",
      location: "Asheville, NC",
      price: 280000,
      bedrooms: 2,
      bathrooms: 1,
      area: 1200,
      type: "House",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 13,
      title: "Downtown Studio Apartment",
      location: "Austin, TX",
      price: 290000,
      bedrooms: 1,
      bathrooms: 1,
      area: 600,
      type: "Apartment",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 14,
      title: "Chic Townhome with Rooftop Deck",
      location: "Denver, CO",
      price: 570000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      type: "Townhouse",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 15,
      title: "Secluded Retreat in the Mountains",
      location: "Lake Tahoe, CA",
      price: 820000,
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      type: "House",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 16,
      title: "Charming Bungalow with Garden",
      location: "Nashville, TN",
      price: 360000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1400,
      type: "House",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 17,
      title: "Modern Apartment in the Arts District",
      location: "Detroit, MI",
      price: 390000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1600,
      type: "Apartment",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 18,
      title: "Rustic Farmhouse with Vineyard",
      location: "Sonoma, CA",
      price: 950000,
      bedrooms: 3,
      bathrooms: 2,
      area: 2200,
      type: "House",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    },
    {
      id: 19,
      title: "High-Rise Condo with Panoramic Views",
      location: "Las Vegas, NV",
      price: 850000,
      bedrooms: 3,
      bathrooms: 3,
      area: 2000,
      type: "Condo",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/28/Photo_h470_w1080/61854185_1_PropertyImage1677603012424_470_1080.jpg",
      isRent: false,
    }
  ]);
  
  function likedProperty(propID){
   console.log("sdf",propID)
   properties.forEach((singleProp, index)=>{
    if(singleProp.id==propID){
      console.log('single',singleProp,index)
      
      properties[index].isliked = true;
      setProperties([...properties])
    }
   })
  }

  return (
    <>
      <PropertyContext.Provider value={{ "propertyList": properties, likedProperty }}>
        <Header />
        <Banner />
        <Routes>
          <Route path='/' element={<PropertyList />} />
          <Route path='property-details/:PropertyID' element={<ProperyDetails />} />
          <Route path='favourite-property' element={<Favourite />} />
        </Routes>
      </PropertyContext.Provider>
    </>
  );
}

export default App;
