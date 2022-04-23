import React from 'react';
import "./expense.scss"
import ExpenseDate from './ExpenseDate';
import { motion, AnimatePresence } from "framer-motion"

export const ExpenseItem = (props) => {
  //const [title, setTitle] = useState(props.title);

  //let title = props.title;
  // const clickHandler = () => {
  //     setTitle('Update!..')
  //     console.log(title);
  // }


  return (
    <motion.li className='expense-item' initial={{opacity:0}} animate={{opacity: 1}} transition={{ duration: 0.8 }} exit={{opacity: 0}}>
        <ExpenseDate date={props.date} />
        <div className='description'>
            <h2>{props.title}</h2>
            <div className="calulation">
              <div className='qty'>{props.qty}</div>
              <div className='multiply'>X</div>
              <div className='price'>${props.price}</div>
              <div className='multiply'>=</div>
              <div className='totalPrice'>${props.price * props.qty}</div>
            </div>
        </div>
    </motion.li>
  )
}
