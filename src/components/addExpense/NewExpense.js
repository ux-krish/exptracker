import React,{useState} from 'react'
import Card from '../UI/Card'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.scss"
import { motion, AnimatePresence } from "framer-motion"

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Card className='new-expense'>
        {!isEditing && (
          <motion.button onClick={startEditingHandler}  initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 0.2 }} exit={{opacity: 0}}>Add New Expense</motion.button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
    </Card>
  )
}

export default NewExpense