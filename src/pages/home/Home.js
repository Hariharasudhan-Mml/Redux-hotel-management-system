import React, { useState } from "react";

import {store} from '../../index';
import image from '../../assets/hotel.jpg'
import home from './Home.module.css';

const Home = () => {

  return (
    <div >
      <div className={home.contents}>
      <div className={home.offers}>
      <h3>Special Offers</h3><hr/>
      <p><a>Ella suits</a></p>
        <span>swimming pool,club,Restaurant</span>
      <p><a>Gateway Hyderabad</a></p>
        <span>Music,gym,club,Restaurant</span>
      <p><a>Alangnita Resorts</a></p>
        <span>2 nights free,gym,club</span>
            </div>
      <div className={home.features}>
       <div className={home.big__title}>My HMS</div>
       <div className={home.feature__1}>Web Booking</div>
       <div className={home.feature__2}>Secure Payment</div>
       <div className={home.feature__3}>Revenue Management</div>
       <div className={home.feature__4}>Guest Profile</div>
       <div className={home.feature__5}>Easy to vocate</div>
       <div className={home.feature__6}>Taxi service</div>
      </div>
      <div className={home.gallery}>
       <img src={image}/>
        <a href="#" >
        click here to view our gallery</a>
      </div>
      </div>
      <div className={home.booking__link}>
        <a href="/book">Click here to book a Room </a>
      </div>

     
    </div>
  );
};

export default Home;
