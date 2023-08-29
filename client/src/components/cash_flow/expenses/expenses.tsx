import React from 'react';
import { Expense } from '../../../core/models/expense';

interface ExpenseListProps {
  expenses: Expense[];
}

export default function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <div>
      <h2>Lista de Gastos</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <p>{expense.description}</p>
            <p>Amount: ${expense.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
