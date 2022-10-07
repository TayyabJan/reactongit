import React,{useRef} from 'react'

const Ref = () => {
    const countRef = useRef(0);
    const handle = () =>{
        countRef.current++;
        console.log(countRef.current + 'times clicked' )
    }

    console.log('I rendered');

  return (
    <button onClick={handle}>Click</button>
  )
}

export default Ref