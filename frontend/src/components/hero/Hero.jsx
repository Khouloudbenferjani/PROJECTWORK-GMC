import React from 'react'
import classes from './hero.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import manEating from '../../assets/man-having-his-meal.jpg'

const Hero = () => {
  return (
    <section style={{height: '200vh'}} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Avez-vous envie de nourriture délicieuse</h2>
          <p className={classes.firstMsg}>Mais sortir pour prendre <span>la nourriture coûte du temps....</span></p>
          <p className={classes.secondMsg}>
          Pourquoi ne pas commander <span>pizza</span> ou quelque chose <br /> <span>delicieuse </span>
            parraport à notre restaurnt
          </p>
          <p className={classes.desc}>
          Un Acceuil Chaleureux . 
          Notre restaurant place toujours le client en avant.
          Ils sont notre chose la plus importante pour notre entreprise.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Commandez !</button>
            <button className={classes.buttonSee}><a href="#foods">Voir les disponibilités <AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero