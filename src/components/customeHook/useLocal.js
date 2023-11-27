import { useState } from 'react';
import PropertyCart from '../PropertyCart';
import { useEffect } from 'react';
export default function useLocal(favourite) {
  const [favProperty, setFavProperty] = useState(() => {
    const localData = localStorage.getItem('properties');
    if (localData) {
      // default value when something exists in local storage
      return localData.split(",");
    } else {
      // default value
      return favourite
    }
  })
  const addItemToLike = (selectedPropID) => {
    const propIndex = favProperty.indexOf(selectedPropID.toString());
    console.log(propIndex)
    if (propIndex != -1) {
      favProperty.splice(propIndex, 1)
    } else {
      favProperty.push(selectedPropID.toString())
    }
    localStorage.setItem('properties', favProperty.join())
    setFavProperty([...favProperty])
  }
  return [favProperty, addItemToLike]
}