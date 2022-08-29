import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div class="travel-card">
      <div className={classes['card-img-container']}>
        <img src={props.image} alt="star" className={classes["star"]}/>
      </div>
      <div className={classes['card-content']}>
        <div className={classes['location']}>
          <img src={process.env.PUBLIC_URL + "/images/location-icon.svg"} alt="location icon"/>
          <span>{props.country}</span>
          <a href ="https://www.google.com/maps/" className={classes['link']}>View on Google Maps</a>
        </div>
        <h2>{props.locationName}</h2>
        <span>{props.startDate + ' - ' + props.endDate}</span>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card;
