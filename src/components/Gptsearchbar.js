import React from 'react'
import language from '../utils/languageconstant'
import { useSelector } from 'react-redux'

const Gptsearchbar = () => {

  const langaugekey=useSelector(store=>store.config.language)
  return (
    <div className=' pt-[10%] flex justify-center'>

   <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg '>
    <input className='col-span-9 p-4 m-4 rounded-lg' type='text' placeholder={language[langaugekey].gptsearchplaceholder}/>
    <button className='text-white col-span-3 m-4 bg-red-950 rounded-lg'>{language[langaugekey].search}</button>
   </form>
    </div>
  )
}

export default Gptsearchbar
