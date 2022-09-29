import React,{useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'


const DetailCountry = () => {
    const [country, setCountry] = useState([]); 
    const {name} = useParams(); 

    useEffect(()=>{
        const fetchIndividualState= async()=>{
            const response= await fetch(`https://restcountries.com/v3.1/name/${name}`); 
            const country= await response.json(); 
            setCountry(country); 
    
        }
        fetchIndividualState(); 
    },[]); 
    return (
        <>
           <Link to='/' className='back_btn'>Back</Link>
            <div className='country_detail'>
                {country.map((country)=>{
                    const {name,flags, population, region,capital,startOfWeek}=country

                    return <article key={name.common}>
                           <div className='flag'> <img src={flags.png} alt={name.common}/> </div>
                           <div className='country_detail'>
                <h2>{name.official}</h2>
                <h5>Population: {population}</h5>
                <h5>Region: {region}</h5>
                <h5>Capital: {capital}</h5>
                <h5>Start of week: {startOfWeek}</h5>
                </div>
                    </article>
                })}
            </div>
            
        </>
    )
}
export default DetailCountry

