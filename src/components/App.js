import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'animate.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Property from './Property';
import AllProperty from './AllProperties';
import PropertyDetails from './PropertyDetails';
import LikeProperty from './Favourite';
import Favourite from './Favourite';
import { useState, useEffect } from 'react';
import { Provider } from './ContextApi';
import axios from 'axios';
import useLocal from './customeHook/useLocal';
import Header from './Header';
import Footer from './Footer';
import Rentz from './Rentz';

function App() {
  const [properties, updateProperty] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [favProperty,setFavProperty] = useLocal([]);
  const [searchResult,setSearchResult] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showContact,setShowContact] = useState(false);
  
  useEffect(() => {
    axios.get("https://vineshgoyal.online/properties/")
      .then(function (res) {
        updateProperty(res.data)
        setLoading(false);
      }).catch(function (error) {
        console.log(error.response.data)
      })
  }, [])
  function showContactHandler(){
    setShowContact(true)
  }
  function hideContact(){
    setShowContact(false)
  }
  function showSearchHandler(){
    setShowSearch(true);
  }
  function hideSearchBar(){
    setShowSearch(false);
  }
  
  return (
    <div>
      <Provider value={{ properties, searchResult:searchResult,setSearchResult:setSearchResult,
        isloading: isloading, addItemToLike: setFavProperty, favProperty: favProperty, 
        showSearchHandler, hideSearchBar, showContactHandler, hideContact}}>
        <BrowserRouter>
        <Header showSearch={showSearch} showContact={showContact} />
          <Routes>
            <Route path='/' element={<Property />} />
            <Route path='all-properties' element={<AllProperty />} />
            <Route path='property-detail/:propertyId' element={<PropertyDetails />} />
            <Route path='favourite' element={<Favourite />} />
            {/* <Route path='rentz' element={<Rentz/>} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
