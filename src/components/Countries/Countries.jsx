import { use } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = ({countriesFlagsPromise}) => {
    const data=use(countriesFlagsPromise);
    const countries=data.countries;
    // console.log(countries)
    return (
        <div>
            <h1>In the countries {countries.length}</h1>
           <div className='countries'>
             {countries.map(country=><Country  country={country}></Country>)}
           </div>
        </div>
    );
};

export default Countries;