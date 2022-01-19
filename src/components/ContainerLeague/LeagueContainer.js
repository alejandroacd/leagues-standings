import React from "react";
import '../ContainerLeague/LeagueContainer.css'
import { Link } from 'react-router-dom';

const LeagueContainer = (props) => {

    return (
        <div className='league-container'>
          <img src={props.image} alt="Logo de la liga en el título" />

          <div className="title_link">
          <h1>{props.name} </h1>

          <Link to={`/leagueinfo/${props.id}`}> Ver tabla de posiciones!</Link>
          </div>
   
          

      </div>
    )
}

export default LeagueContainer