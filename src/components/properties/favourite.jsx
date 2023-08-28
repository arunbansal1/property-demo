import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PropertyContext } from '../../context/propertyContext';
export default function Favourite() {
    let arr = localStorage.getItem("properties")
    console.log("properties");
    let newarr = [];
    if (arr != null) {
        newarr = arr.split(",");
    }

    let selectedProperty = [];
    console.log(newarr)
    // console.log(arr.split(","))
    const { propertyList } = useContext(PropertyContext);
    // console.log(propertyList)
    propertyList.forEach((singleProperty) => {
        if (newarr.indexOf(singleProperty.id.toString()) != -1) {
            console.log(singleProperty)
            selectedProperty.push(singleProperty)
        }
    });

    var newproperty = selectedProperty.map((sproperty) => {
        return<div className='col-md-4' key={sproperty.id}>
        <div className="card m-2">
          <img className="card-img-top" src={sproperty.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{sproperty.title}</h5>
            <div>{sproperty.location}</div>
            <div><span className='font-weight-bold'>Price</span> ₹{sproperty.price}</div>
            <div>{sproperty.isRent}</div>
          </div>
        </div>
      </div>
    })
    return (
        <div className='container'>
           <div className='row'> {newproperty}</div>
        </div>
    )
}
