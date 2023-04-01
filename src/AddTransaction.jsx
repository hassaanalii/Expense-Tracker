import React, { useState } from 'react'

export default function AddTransaction(props) {
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType]  = useState("Income")
    const changedfirst = (event) =>{
        setAmount(event.target.value)
    }
    const changedsecond = (event) =>{
        setDesc(event.target.value)
    }
    const changedthird = (event) =>{
        setType(event.target.value)
    }
    const trasactionAdded = ()=>{
        props.addTrans({
            amount:Number(amount),desc,type
        })
        // console.log(amount + desc + type)
        props.togAddTransaction(); 
    }
  return (
    <div className='addTransac'>
        <input type="number" placeholder='Amount' value={amount} onChange={changedfirst}></input>
        <input type="text" placeholder='Description' value={desc} onChange={changedsecond}></input>
        <div className='inner'>
            <input type="radio" onChange={changedthird} id="income" name="butrad" value="Income" checked={type==="Income"} ></input>
            <label for="income">Income</label>
            <input type="radio" onChange={changedthird} id="expense" name="butrad" value="Expense" checked={type==="Expense"}></input>
            <label for="expense">Expense</label>
        </div>
        <button className='myBut' onClick={trasactionAdded}>Add Transaction</button>
        
    </div>
  )
}

  
