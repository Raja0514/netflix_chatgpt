import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggestions from './Gptmoviesuggestions'
import { BACKGROUND_IMG_URL } from '../utils/constant'

const Gptsearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BACKGROUND_IMG_URL}
          alt="log"
        />
      </div>
        <Gptsearchbar/>
        <Gptmoviesuggestions/>     
    </div>
  )
}

export default Gptsearch
