import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Search from './search';

const url='https://restcountries.com/v3.1/all'; 
const AllCountries = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries);

    useEffect(() => {
        const fetchCountries = async () => {
          const response = await fetch(url)
          const countries = await response.json()
          setCountries(countries)
          setFilteredCountries(countries);
        }
    
        fetchCountries()
      }, []);
    const search = e => {
        setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase())));
    };

    return (
        <>
            <Search search={search} />
           <div className='grid'>
                {
                    filteredCountries.map((country)=>{
                        const {name,flags, population}=country; 
                        return <article key={name.official}>
                        <div>
                            <img src={flags.png} alt={name}/>
                    <h3>Name: {name.official}</h3>
                    <h3>Population: {population}</h3>
                    <Link to={`/countries/${name.common}`}>Country details</Link>
                    
                            </div>
                            </article>
                    })
                }
            </div>
        </> 
    )
}
export default AllCountries; 
