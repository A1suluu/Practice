import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Countries () {
    const [countries, setCountries] = useState([])

    function getCountries () {
        axios.get("https://restcountries.eu/")
        .then((response) => {
            setCountries(response.data)
        })
    }
    useEffect(() => {
        getCountries()
    }, [])

    const [value, setValue] = useState("")

    const filteredCountries = countries.filter(country =>{
        return country.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
            <div className='form'>
                <form className='seacr_form'>
                    <input
                    type={text}
                    placeholder="Search in the country..."
                    className='search_input'
                    onChange={(event) => setValue(event.target.value)}/>
                    
                    <img scr={img} alt="img" className='search_img'/>
                </form>
            </div>
            <div className='countries'>
            {
                countries.filteredCountries((country, index) => {
                    return(
                        // <CountryItem country={country} key={index}/>
                        <div country={country} key={index}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Countries