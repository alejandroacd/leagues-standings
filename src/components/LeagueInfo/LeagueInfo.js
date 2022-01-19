import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../LeagueInfo/LeagueInfo.css'


const LeagueInfo = (props) => {

    let params = useParams();
    const [name,setName] = useState()
    const [info,setInfo] = useState([])
    const [year,setYear] = useState('2021')


    useEffect(() => {
        axios.get(`https://api-football-standings.azharimm.site/leagues/${params.id}/standings?season=${year}&sort=asc`)
        .then(res => {
            setInfo(res.data.data.standings)
            setName(res.data.data.name)
        })
        .catch(err => {
            console.log(err)
        })
    },[params.id, year])

    return (
        <div className='info-container'>
            <h1> {name} </h1>
            <select 
            name="selected-year"
            defaultValue={year}
            onChange={(e) => setYear(e.target.value)}>
                <option value="2011"> 2011 </option>
                <option value="2012"> 2012 </option>
                <option value="2013"> 2013 </option>
                <option value="2015"> 2014 </option>
                <option value="2015"> 2015 </option>
                <option value="2016"> 2016 </option>
                <option value="2017"> 2017 </option>
                <option value="2018"> 2018 </option>
                <option value="2019"> 2019 </option>
                <option value="2020"> 2020 </option>
                <option value="2021"> 2021 </option>
            </select>
            {info.map((res,index) => {
                return (
                    <div key={index} className='tabla-posiciones'>
                         <p> {index + 1}. {res.team.displayName}</p>
                         <img src={res.team.logos[0].href} alt="Logo del equipo" />
                    </div>
                )
            })}
        </div>
    )
}


export default LeagueInfo;