import React, { useState } from 'react'
import './App.css'
import {delay, motion} from 'framer-motion'

const App = () => {
  const [move,setRotaion] = useState('false');
  return (
    <section className="example_container">
    <motion.div 
    animate={{rotate: 90,scale: [0.8,1.2,1.2,0.8], y:[0,10,-10,0]}}
    transition={{repeat: Infinity, duration: 1}}
    className='motion'>
    </motion.div>

    <motion.div 
    animate={{rotate : 90,scale: [1.2,0.8,0.8,1.2] ,y:[0,-10,10,0]} }
    transition={{repeat: Infinity, duration: 1}}
    className='motion'>
    </motion.div>

    <motion.div 
    animate={{rotate: 90,scale: [0.8,1.2,1.2,0.8], y:[0,10,-10,0]}}
    transition={{repeat: Infinity, duration: 1}}
    className='motion'>
    </motion.div>

    <motion.div 
    animate={{rotate: 90, scale: [1.2,0.8,0.8,1.2], y:[0,-10, 10,0]}}
    transition={{repeat: Infinity, duration: 1}}
    className='motion'>
    </motion.div>
    </section>

    
  )
}

export default App

