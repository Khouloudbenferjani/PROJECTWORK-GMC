import React from "react"
import classes from "./footer.module.css"
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai"

const Footer = () => {
  return (
    <section id="faq" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.title}>Jours Ouverts</h2>
          <ul className={classes.list}>
            <li>Lundi - Vendredi</li>
            <li className={classes.workingTime}>08:00 - 22:00</li>
            <li>Samedi</li>
            <li className={classes.workingTime}>08:00 - 20:00</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Newsletter</h2>
          <ul className={classes.list}>
            <li>Abonnez-vous à notre page</li>
            <li>Nos derniers plats</li>
            <li>Promotion</li>
            <li>instantanément</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Réseaux Sociaux</h2>
          <ul className={classes.iconList}>
            <li><AiFillInstagram /></li>
            <li><AiFillFacebook /></li>
            <li><AiFillTwitterCircle /></li>
          </ul>
        </div>
      </div>
        <div className={classes.attribution}>
        
        
       </div>
    </section>
  )
}

export default Footer