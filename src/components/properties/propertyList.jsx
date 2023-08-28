import { useContext, react } from 'react';
import { Link } from 'react-router-dom';
import { PropertyContext } from '../../context/propertyContext'
import { FiEye } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';
import { AiOutlineHeart } from 'react-icons/ai'
export default function PropertyList() {
  const { propertyList, likedProperty } = useContext(PropertyContext);
  var like = true ;
  // console.log(propertyList)
  let properties = propertyList;
  function clickonLike(likesingleProperty) {
    let propertyId = likesingleProperty.id;
    likedProperty(propertyId);
    let oldProperties = localStorage.getItem("properties"); // 11,12
    if (oldProperties) {
      // some property alteady liked so need to convert into array
      oldProperties = oldProperties.split(","); // ["11","12"]
      let propertyIndex = oldProperties.indexOf(propertyId.toString()) // 2 or -1
      // console.log(propertyIndex);
      like = false;
      if (propertyIndex == -1) {
        // property is not liked already so need to add into the array
        oldProperties.push(propertyId);
      } else {
        // property already liked so need to remove
        oldProperties.splice(propertyIndex, 1);
      }
      
    } else {
      // first time liking the property
      oldProperties = [propertyId];
    }
    // convert into string before store in local storage
    localStorage.setItem("properties", oldProperties.join());
  }
  let propertyItem = propertyList.map((sproperty) => {
    return <div className='col-md-4' key={sproperty.id}>
      <div className="card m-2">
        <img className="card-img-top" src={sproperty.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{sproperty.title}</h5>
          <div>{sproperty.location}</div>
          <div><span className='font-weight-bold'>Price</span> ₹{sproperty.price}</div>
          <div>{sproperty.isRent}</div>
          <div className='mt-4'>
            <Link to={'/property-details/' + sproperty.id} className="btn btn-outline-primary"><FiEye /> Detail</Link>
           <button type='button' onClick={function(){clickonLike(sproperty)}} className="btn btn-outline-danger ml-1"> <FcLike />{sproperty.isliked? "Yes": "No"}Like</button>
          </div>
        </div>
      </div>
    </div>
  });


  return (
    <div className='container'>
      <h1 className='text-center my-5'>
        List of best Properties
      </h1>
      <div className='text-right mr-2'>
        <Link to={'/favourite-property'} type='button' className='btn btn-secondary'><FcLike />&nbsp;Like View</Link>
      </div>
      <div className='row'>{propertyItem}</div>
    </div>
  )

}
