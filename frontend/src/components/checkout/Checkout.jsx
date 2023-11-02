import React from 'react'
import { useSelector } from 'react-redux'
import classes from './checkout.module.css'

const Checkout = () => {
  const {products} = useSelector((state) => state.cart)

  let totalPrice = 0
  products.map((product) => totalPrice += (product.quantity * product.price))
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>COMMANDE PRISE AVEC SUCEES</h2>
        <p>Rejetée dans 60min</p>
        <span>Montant Total: TND{totalPrice}</span>
      </div>
    </div>
  )
}

export default Checkout