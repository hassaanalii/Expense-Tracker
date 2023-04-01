import React, { useState } from 'react'
import AddTransaction from './AddTransaction';
import TransactionCells from './TransactionCells';
export default function Balance(props) {
  const [t, updateTransactions] = useState([]);

  const addTrans = (data)=>{
    const tempArray = [...t]
    tempArray.push(data);
    updateTransactions(tempArray);
  } 
    const clickedFunc = ()=>{
        togAddTransaction(!isAddTransactionVis)
    }
    const [isAddTransactionVis, togAddTransaction] = useState(false);
  return (
    <div>
        <div className='balance'>
          <div className='innerBalance'>
            <p>Balance:</p>
            <p>$10000</p>
          </div>
        
           <button onClick={clickedFunc}>{isAddTransactionVis?"Cancel":"Add"}</button>

        </div>
        {isAddTransactionVis && <AddTransaction togAddTransaction={togAddTransaction} addTrans={addTrans} t={t} />}
        <div className='mid'>
          <div className="expense">
            Expense <span className='span1'>$1000</span>
          </div>
          <div className="inc">
            Income <span className='span2'>$5000</span>
          </div>
        </div>
        <div className="transt">
          <p>Transactions</p>
          <input type="text" placeholder='Search' />
{/* 
          {props.t?.length?props.t.map((a)=> (<TransactionCells a={a}/>)) : ""} */}
          {/* {props.t? <TransactionCells a={a} /> : ""} */}
          {!!props.t && <TransactionCells a={a} />}
          
        </div>
    </div>
  )
}

