import React from 'react'
import classes from './newsletter.module.css'
import {AiOutlineSend} from 'react-icons/ai'
import newsletterIllustration from '../../assets/get-newsletter-updates.webp'

const Newsletter = () => {
  return (
    <section id='contacts' className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Nos derniers offres</h4>
        <h2 className={classes.title}>Lettre</h2>
        <div className={classes.inputContainer}>
          <input type="text" placeholder='Votre email...'/>
          <AiOutlineSend className={classes.sendIcon}/>
        </div>
        <img src={newsletterIllustration} className={classes.illustration} alt=""/>
      </div>
    </section>
  )
}

export default Newsletter