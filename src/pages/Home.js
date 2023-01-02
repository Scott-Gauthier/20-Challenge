import React from 'react';
import MERN from '../assets/MERN-Logo.png'
import MSSQL from '../assets/MSSQL-Logo.png'
import MYSQL from '../assets/MySQL-Logo.png'
import Suit from '../assets/Suit-photo.jpg'
import Card from '../components/card-elements/card'
import Row from '../components/card-elements/row'


function Home() {

  return (
    <div>

      <p>About me here!</p>
      <img src={Suit} alt="Man walking in a blue suit looking sharp!" width="300" height="auto"/>
      <img src={MERN} alt="Logo for Mongodb, Express, React, Nodejs." width="400" height="auto"/>
      <img src={MSSQL} alt="Logo for Microsoft SQL or MSSQL for short." width="400" height="auto"/>
      <img src={MYSQL} alt="Logo for MySQL." width="400" height="auto"/>
      <Row></Row>
    </div>
  )
}

export default Home;