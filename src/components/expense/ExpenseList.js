import React from 'react'
import Card from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';

const ExpenseList = (props) => {
    
    if(props.items.length === 0){
        return <Card className='expense-item'><p className='no-data'>No Data listed</p></Card>;
    }

    return(
        <ul className='expenses-list'>
            {
                props.items.map(
                    (expense) => (
                        <ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} qty={expense.qty} />
                    )
                )
            }
        </ul>
    )
}

export default ExpenseList