import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { PropertyContext } from '../../context/propertyContext'
export default function ProperyView() {
  let params = useParams();
  let [property, updateProperty] = useState({});
  const { propertyList } = useContext(PropertyContext);
  let result = true;
  useEffect(() => {
    propertyList.forEach((singleProperty) => {
      if (params.PropertyID == singleProperty.id) {
        updateProperty(singleProperty)
      }
    });
  }, [])
  return (
    <div className='text-center  mt-5 container'>
      <h5 className='text-danger'>Details Of Property</h5>
      <img src={property.image} />
      <div className='my-4'>
        <button className='btn btn-outline-primary'>Contact Owner</button>
        &nbsp;&nbsp;
        <button className='btn btn-outline-danger'>Book Site Visit</button>
      </div>
      <div>
        <h1>More Details</h1>
        <table className='table'>
          <tbody>
          <tr>
            <td>Price BreakUp</td>
            <th>{property.price}</th>
          </tr>
          <tr>
            <td>Location</td>
            <th>{property.location}</th>
          </tr>
          <tr>
            <td>Address</td>
            <th>{property.title}</th>
          </tr>
          <tr>
            <td>Rent</td>
            <th>{property.isRent ? "Yes" : "No"}</th>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
