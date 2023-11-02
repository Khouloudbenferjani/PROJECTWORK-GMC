import React from 'react'
import Hero from '../hero/Hero'
import classes from './home.module.css'
import illustration1 from '../../assets/male-delivery-guy-riding-scooter.webp'
import illustration2 from '../../assets/delivery-location.jpg'
import illustration3 from '../../assets/deliveryman-with-pizza.jpg'
import Foods from '../foods/Foods'
import Newsletter from '../newsletter/Newsletter'

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Livraison</span>
            <h2 className={classes.deliveryTitle}>Toujours à l'heure pour toi</h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={illustration1} alt="" className={classes.firstImg}/>
              <h3>Nos livraisons sont instantanémént</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration2} alt="" className={classes.secondImg}/>
              <h3>Travailleur</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration3} alt="" className={classes.thirdImg}/>
              <h3>Sociable</h3>
            </div>
          </div>
        </div>
        <Foods />
        <Newsletter />
      </div>
    </div>
  )
}

export default Home