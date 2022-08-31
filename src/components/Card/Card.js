import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div class={classes['travel-card']}>
      <div className={classes['card-img-container']}>
        <img src={props.image} alt="Location" className={classes["location-img"]}/>
      </div>
      <div className={classes['card-content']}>
        <div className={classes['location']}>
          <img src={process.env.PUBLIC_URL + "/images/location-icon.svg"} alt="location icon" className={classes['location-icon']}/>
          <span className={classes['country']}>{props.country}</span>
          <a href ="https://www.google.com/maps/" className={classes['link']}>View on Google Maps</a>
        </div>
        <h2 className={classes['card-content-location']}>{props.locationName}</h2>
        <span className={classes['card-content-date']}>{props.startDate + ' - ' + props.endDate}</span>
        <p className={classes['card-content-desc']}>{props.description}</p>
      </div>
    </div>
  )
}

export default Card;
