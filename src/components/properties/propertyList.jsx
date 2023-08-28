import { useContext, react } from 'react';
import { Link } from 'react-router-dom';
import { PropertyContext } from '../../context/propertyContext'
import { FiEye } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';
import { AiOutlineHeart } from 'react-icons/ai'
export default function PropertyList() {
  const { propertyList } = useContext(PropertyContext);
  var like = true ;
  let properties = propertyList;
  function clickonLike(likesingleProperty) {
    let propertyId = likesingleProperty.id;
    let oldProperties = localStorage.getItem("properties");
    if (oldProperties) {
      oldProperties = oldProperties.split(",");
      let propertyIndex = oldProperties.indexOf(propertyId.toString())
      like = false;
      if (propertyIndex == -1) {
        oldProperties.push(propertyId);
      } else {
        oldProperties.splice(propertyIndex, 1);
      }
      
    } else {
      oldProperties = [propertyId];
    }
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
           <button type='button' onClick={function(){clickonLike(sproperty)}} className="btn btn-outline-danger ml-1"> <AiOutlineHeart />Like</button>
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
