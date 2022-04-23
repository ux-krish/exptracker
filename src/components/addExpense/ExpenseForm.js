import React, { useState } from 'react'
import "./ExpenseForm.scss";
import { motion, AnimatePresence } from "framer-motion"

const ExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState('');
    const [enterPrice, setEnterPrice] = useState('');
    const [enterDate, setEnterDate] = useState('');
    const [enterQty, setEnterQty] = useState('');


    //*** useState as an Object // Approach 2
    // const [userInput, setUserInput] = useState({
    //     enterTitle : '',
    //     enterPrice: '',
    //     enterDate: '',
    //     enterQty: ''
    // })

    const titleChangeHandler = (event) => {
        //get values from input onChange handler
        setEnterTitle(event.target.value);
        // change title without affecting other inputs value // Approach 2
        //*** pass userInput with spread operator so its overwrite title without changing others state object values

        // setUserInput({
        //     ...userInput,
        //     enterTitle : event.target.value
        // })

        // before state update annonymous state for ***Object to take snapshot (getSnapshotBeforeUpdate()) of previous state then update title with unchange prev values from other inputs  // Approach 2
        // setUserInput((prevState) => {
        //     return {...prevState, enterTitle : event.target.value}
        // });
    }
    const priceChangeHandler = (event) => {
        //get values from input onChange handler
        setEnterPrice(event.target.value);
        //console.log(event.target.value);
        
    }
    const dateChangeHandler = (event) => {
        //get values from input onChange handler
        setEnterDate(event.target.value);
        //console.log(event.target.value);
        
    }
    const qtyChangeHandler = (event) => {
        //get values from input onChange handler
        setEnterQty(event.target.value);
        //console.log(event.target.value);
        
    }

    const submitHandler = (event) => {
        // block default submit behaviour like refresing window
        event.preventDefault();

        // bind date into object
        const expenseData = {
            title: enterTitle,
            price: +enterPrice,
            date: new Date(enterDate),
            qty: enterQty
        };
        //console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        //clearing input values after submit
        setEnterTitle('');
        setEnterPrice('');
        setEnterDate('');
        setEnterQty('');
    }

  return (
    <motion.form onSubmit={submitHandler} initial={{opacity:0}} animate={{opacity: 1}} transition={{ duration: 0.2 }} exit={{opacity: 0}} >
        <AnimatePresence>
            <div className='controls'>
                <div className='control'>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler} placeholder='Add expense title' />
                </div>
                <div className='control'>
                    <input type="number" value={enterPrice} onChange={priceChangeHandler} min="0.01" step="0.01" placeholder='Add price' />
                </div>
                <div className='control'>
                    <input type="date" value={enterDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
                </div>
                <div className='control'>
                    <input type="number" value={enterQty} onChange={qtyChangeHandler} placeholder='Quantity' min="0" step="0" />
                </div>
            </div>
            <div className='actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </AnimatePresence>
    </motion.form>
  )
}

export default ExpenseForm