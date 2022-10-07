import React,{useEffect,useState} from 'react'
import { useNavigate,useParams,useSearchParams } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
  const [products,setProducts]= useState([]);
  useEffect(()=>{
    const config = {  headers: 
      { 
        "auth-token": localStorage.getItem("token")
      }
    }

    const bodyparams = {
      name: "Test"
        
    }
    axios.post("https://jsbackendapi.herokuapp.com/api/products",bodyparams,config
    ).then( res =>{
      console.log(res.data)
      setProducts(res.data);
      
    }).catch(err =>{
      console.log(err)
    })
  },[])
  // const [searchParams]= useSearchParams();
  // const navigation = useNavigate();
  // console.log(Object.fromEntries([...searchParams]))
  // // const params = Object.fromEntries([...searchParams])
  // const goback = () => {
  //   alert("Going Back;")
  //   navigation(-1)// for recent last   location
  //   //can also use / for home and /About instead of -1 for fixed location 
  // }
  return (
    // <div>Products: {params.sort}
    // <p> Product: {searchParams.get("sort")}</p>
      
    //   {/* <button onClick={goback}>Go Back </button> */}
    // </div>
  <div>
    {products.map(data =>  {
      return  (<tr>
        <td>{data.title}</td>
    <td>{data.price}</td>
      </tr>)
    })}
  </div>    
  )
}

export default Products