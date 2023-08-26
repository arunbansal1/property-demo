import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import PropertyList from './components/properties/propertyList.js';
import ProperyDetails from './components/properties/properyDetails.js';
import Header from './common/header.js';
import Banner from './components/Banner/Banner.jsx';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path='' element={<PropertyList />} />
        <Route path='property-details/:PropertyID' element={<ProperyDetails />} />
      </Routes>
    </>
  );
}

export default App;
