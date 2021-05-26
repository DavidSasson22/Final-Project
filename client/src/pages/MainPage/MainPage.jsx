import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mainPage.css';
import loader from '../../assets/svg/three-dots.svg';


export default function MainPage() {

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  const getPosition = () => {
    console.log(`getPosition activated`);
    window.navigator.geolocation.getCurrentPosition(
      (pos) => pos !== location && setLocation(pos),
      (err) => setLocation(err)
    );
  };

  const posToAddress = async () => {
    console.log(`posToAddress activated`);
    if (location) {
      try {
        let myAddress = await (await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=AIzaSyCB4z8R5G-GWDAghqsgVnxctYQn-hYtHOE&region=En&language=en`)).data.results;
        let myCountry = myAddress[0].address_components[myAddress[0].address_components.length -1].long_name;
        let myCity = myAddress[0].address_components[myAddress[0].address_components.length -3].long_name;
        setAddress({
          country: myCountry,
          city: myCity,  
        });
      } catch (e) {
        console.log(e);
      };
    };
  };

  const renderFunc = () => {
    if (!location) {
      return (
        <div>
          <h2>Waiting for location</h2>
          <img src={loader} alt="loader" className="loader"/>
        </div>
      );
    }
    else if (location && !address) {
      console.log(location);
      return (
        <div><h2>Your location is:</h2>
          <h3>latitude: {location.coords.latitude}</h3>
          <h3>longitude: {location.coords.longitude}</h3>
          <h4>Waiting for address</h4>
          <img src={loader} alt="loader" className="loader"/>
        </div>
      );
    }
    else if (location && address) {
      return (
        <div><h2>Your location is:</h2>
          <h3>latitude: {location.coords.latitude}</h3>
          <h3>longitude: {location.coords.longitude}</h3>
          <h3>Country: {address.country}</h3>
          <h3>City: {address.city}</h3>
        </div>
      );
    };
  };

  useEffect(() => { getPosition() }, []);
  useEffect(() => { posToAddress() }, [location]);

  return (
    <div className="mainPage">
      {renderFunc()}
    </div>
  );
};




 // const posToAddress = async () => {
  //   try {
  //     let data = await axios.get(`${baseUrl}`, {params});
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }


    // let params = {
  //   access_key: '4596d54cfe04826b2fb943f69469995b',
  //   query: '32.082,34.8122'
  // }

  // let baseUrl = `http://api.positionstack.com/v1/forward`


  // params.query = `${location.coords.latitude}, ${location.coords.longitude}`;