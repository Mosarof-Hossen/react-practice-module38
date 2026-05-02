import { use, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = ({countriesFlagsPromise}) => {

    const [visitedCountries,setVisitedCountries]=useState([])

    const handleVisitedCountries=(country)=>{
        console.log('handle visited country clicked',country)
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }

    const data=use(countriesFlagsPromise);
    const countries=data.countries;

    // const [VisitedCountries,setVisitedCountries] = useState([])
    // console.log(countries)
    // const handleVisitedCountries=()=>{
    //    console.log('handle visited click country',)
    // //    setVisitedCountries.push(country1)
        
    // }
    return (
        <div>
            <h1>In the countries {countries.length}</h1>
            <h3> Country visited count :{visitedCountries.length}</h3>

            <ol>
                {visitedCountries.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)}
            </ol>
           <div className='countries'>
             {countries.map(country=><Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} ></Country>)}
           </div>
        </div>
    );
};

export default Countries;