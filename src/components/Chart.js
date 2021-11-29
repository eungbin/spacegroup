import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import './../css/Chart.css';
import axios from 'axios';

function Chart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getChartData', {
                params: {
                    
                }
            });

            let listData = [];
            let listData_2 = [];


            res.data.map(i => {
                listData.push(i.locationName);
            })

            const result = listData.reduce((accu, curr) => { 
                accu[curr] = (accu[curr] || 0)+1; 
                return accu;
            }, {});

            listData_2.push(Object.keys(result))
            listData_2.push(Object.values(result))

            setData(listData_2);
        })();
    }, []);

    const data2 = {
        labels: data[0],
        datasets: [
          {
            label: '지역별 대여현황',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: data[1]
          }
        ]
      };

    return (
        <>
            {data.length === 0 ? <h1>Loading...</h1> : 
                <div className="chartContainer">
                    <h1>차트</h1>
                    <Bar className="chart"
                    data={data2}
                    width={100}
                    height={10}
                    options={{
                        maintainAspectRatio: false
                    }}
                    />
                </div>
            } 
        </>
    );
}

export default Chart;