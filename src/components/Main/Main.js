import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LeagueContainer from '../ContainerLeague/LeagueContainer'
import '../Main/Main.css'

const Main = () => {
    const [leagues, setLeagues] = useState([])
    const [search, setSearch] = useState('')


    const handleChange = (e) => {
         setSearch(e.target.value)
    }
    useEffect(() => {
        axios.get('https://api-football-standings.azharimm.site/leagues')
            .then(res => {
                let ligas = res.data.data
                setLeagues(ligas)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const finalValues = leagues.filter(liga => liga.name.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <div className='main'>
            <input placeholder='Esciba una liga acá...' className="searcher" type="text" onChange={handleChange} />
            {finalValues.map(league => {
                return (
                    <LeagueContainer key={leagues.indexOf(league)} id={league.id} name={league.name} image={league.logos.light} />
                )
            })}
        </div>


    )

}

export default Main;