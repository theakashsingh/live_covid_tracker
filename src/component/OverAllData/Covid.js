import React, {useEffect, useState} from 'react';
import './Covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch(process.env.REACT_APP_COVID_TRACKER_API);
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
           console.log(err); 
        }
       
    }

    useEffect(() => {
         getCovidData();  
    }, []);

    return (
        <>
        <div className='live'>
          <div className="animate"><span>🔴</span></div> 
          <h1>Live</h1>
         </div>  
           
          <h2>COVID-19 CORONAVIRUS TRACKER</h2> 
            <div className="card">

                <div className="card_main">
                  <div className="card_inner">
                          <p className="card_name"><span>OUR</span>COUNTRY</p>
                          <p className="carda_total card_small">INDIA</p>
                  </div>
              
              
                  <div className="card_inner">
                      
                          <p className="card_name"><span>TOTAL</span>RECOVERED</p>
                          <p className="carda_total card_small">{data.recovered}</p>
                  </div>
              
            
                  <div className="card_inner">
                      
                          <p className="card_name"><span>TOTAL</span>CONFIRMED</p>
                          <p className="carda_total card_small">{data.confirmed}</p>
                  </div>
        
              
               
                  <div className="card_inner">
                          <p className="card_name"><span>TOTAL</span>DEATH</p>
                          <p className="carda_total card_small">{data.deaths}</p>
                  </div>
              
              
                  <div className="card_inner">
                          <p className="card_name"><span>TOTAL</span>ACTIVE</p>
                          <p className="carda_total card_small">{data.active}</p>
                  </div>
              
              
                  <div className="card_inner">
                          <p className="card_name"><span>LAST</span>UPDATED</p>
                          <p className="carda_total card_small">{data.lastupdatedtime}</p>

                  </div>
                </div>

            </div>
            
           
        </>
    )
}

export default Covid
