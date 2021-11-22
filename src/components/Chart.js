import React, {useState, useEffect} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

            res.data.map(i => {
                listData.push(i.spaceAddressSummary);
            })

            const result = listData.reduce((accu, curr) => { 
                accu[curr] = (accu[curr] || 0)+1; 
                return accu;
            }, {});

            setData(JSON.stringify(result));
        })();

        console.log(data);
    }, [data]);

    const data2 = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return (
        <>
            <ResponsiveContainer className="chart">
            <BarChart
                width={500}
                height={500}
                data={data2}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default Chart;