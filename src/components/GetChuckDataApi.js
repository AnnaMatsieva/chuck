import React, { useState } from "react";

function FetchAPI() {
    const [data, setData] = useState([]);
  
    const apiGet = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-RapidAPI-Host': 'https://api.chucknorris.io',
                'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
            }
        };
    
        fetch('https://api.chucknorris.io/jokes/random', options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err));

        console.log({data});
    }
    
    return (
        <div className="jokes">
            <div className="jokes__image"></div>
            <button className="button" onClick={apiGet}>Click to see the joke</button>
            {data.value && <p className="jokes-description">&ldquo;{data.value}&rdquo;</p>}
        </div>
    );
}

export default FetchAPI;