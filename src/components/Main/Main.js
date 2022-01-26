import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LeagueContainer from '../ContainerLeague/LeagueContainer'
import '../Main/Main.css'
import * as ReactStrap from 'react-bootstrap';


const Main = () => {
    const [leagues, setLeagues] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
         setSearch(e.target.value)
    }
    useEffect(() => {
        setLoading(true)
        axios.get('https://api-football-standings.azharimm.site/leagues')
            .then(res => {
                let ligas = res.data.data
                setLeagues(ligas)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const finalValues = leagues.filter(liga => liga.name.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <div className='main'>
             <h1 className='page-title'>
LEADERBOARD HISTORICAL FILE:</h1>
            <input placeholder='Search a league...' className="searcher" type="text" onChange={handleChange} />
            {loading 
            
            ? 
            <div className='spiner-div'>
                
                <ReactStrap.Spinner animation="border" className="spiner" />     
                
             </div>
            
            
            
            : finalValues.map(league => {
                return (
                    <LeagueContainer key={leagues.indexOf(league)} id={league.id} name={league.name} image={league.logos.light} />
                )
            })}
        </div>


    )

}

export default Main;