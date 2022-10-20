import React, { useContext } from 'react';
import { context } from '../context/Formstate';

function Header() {
  const {totalIncome } = useContext(context)
  return (
    <header>
      <h1>Income Tracker</h1>
      <div className="total-income">£{totalIncome}</div>
    </header>
  );
}

export default Header;