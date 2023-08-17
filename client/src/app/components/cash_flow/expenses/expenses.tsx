import React from 'react'
import { Expense } from "../../../interfaces/expense"

interface ExpenseListProps {
    expenses: Expense[];
  }

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
    return (
      <div>
        <h2>Lista de Gastos</h2>
        <ul>
          {expenses.map(expense => (
            <li key={expense.id}>
              <p>{expense.description}</p>
              <p>Amount: ${expense.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ExpenseList;