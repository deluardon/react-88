import React, { useState, useEffect } from 'react';
import Card from './Card'; 

const Api = () => {

    const [data, setData] = useState([]);
    // console.log(data);

    const url = 'Api.json';

    // console.log(url);

    useEffect(() => {

        fetch(url)

            .then(res => res.json())
            
            .then(data => setData(data))

            .catch(err => console.log('Error fetching data:', err));
    }, []);

    return (
        <div>
            <h1>Hello</h1>
           <div className='grid grid-cols-3 p-5 gap-8'>
           {
            data.map(data =>  
                <Card key={data.id} data={data}> </Card>
            )
            }
           </div>
        </div>
    );
   
};
// console.log(data);

export default Api;

typeof(React)
