import React, { useContext } from 'react';
import { context } from '../context/Formstate';
import IncomeItem from './IncomeItem';

function IncomeList() {
    const {income, setIncome } = useContext(context)
  const removeIncome = i => {
    let temp = income.filter((v, index) => index != i);
    setIncome(temp);
  }

  const sortByDate = (a, b) => {
    return a.date - b.date;
  }

  return (
    <div className="income-list">
      {
        income.sort(sortByDate).map((value, index) => (
          <IncomeItem 
            key={index} 
            income={value} 
            index={index} 
            removeIncome={removeIncome}
          />
        ))
      }
    </div>
  )
}

export default IncomeList;