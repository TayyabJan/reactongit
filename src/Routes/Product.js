import React from 'react'
import {useParams} from 'react-router-dom'

const Product = () => {
    const {PID} = useParams();
  return (
    <div>Product id is : {PID}</div>
  )
}

export default Product