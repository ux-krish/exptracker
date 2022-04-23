import React from 'react'
import "./Chartbar.scss"
import { motion } from "framer-motion"

const ChartBar = (props) => {

  let fillHeight = "0%";
  
  if(props.maxValue > 0){
      fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
      
  }

  //console.log(props.maxValue);
    
  return (
    <motion.div className='chart-bar' initial={{opacity:0}} animate={{opacity: 1}} transition={{ duration: 1 }} exit={{opacity: 0}}>
        <div className='inner'>
            <div className='fill' style={{height : fillHeight}}></div>
        </div>
        <div className='label'>{props.label}</div>
    </motion.div>
  )
}

export default ChartBar