import React,{useState} from 'react'
import Spinner from './Spinner';
import useGif from './useGif';
const Tag = () => {
    const [tag,setTag]=useState('car');
    const {gif,loading,getData}=useGif(tag);
    function clickHandler(){
        
        getData(tag);
    }
    function changeHandler(event){
        setTag(event.target.value);
    }
  return (
    <div className='w-full lg:w-1/2 bg-blue-400 border border-black rounded-lg flex flex-col gap-y-5 mt-[15px] py-4 items-center'>
      <h1 className=' text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
     { loading?(<Spinner/>):(<img src={gif} alt='#'  className=' w-full sm:w-[450px] object-contain'/>) }
        <input className=' w-10/12 bg-white py-2 text-lg rounded-lg text-center'  onChange={changeHandler} value={tag}/>
      <button
       className=' w-10/12  bg-white/70 hover:bg-white py-2 text-lg rounded-lg' 
      onClick={clickHandler}>GENERATE</button>
    </div>
  )
}

export default Tag