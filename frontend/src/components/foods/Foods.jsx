import React from 'react'
import { foodTypes } from '../../data/data'
import {Link} from 'react-router-dom'
import classes from './foods.module.css'

const Foods = () => {
  return (
    <section id="foods" className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>NOTRE MENU</h4>
        <h2 className={classes.title}>Les meilleurs plats que vous pouvez avoir</h2>
        <div className={classes.foods}>
          {foodTypes.map((foodType) => (
            <Link to={`/foods/${foodType.name}`} key={foodType.id} className={classes.food}>
              <h4>{foodType.name}</h4>
              <div className={classes.imgContainer}>
                <img src={foodType.img}/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Foods