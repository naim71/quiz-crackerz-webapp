import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const Statistics = () => {
    const [xvalue, setXvalue] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => setXvalue(data.data))
        
    },[])
    return (
        <div style={{ width: '90%', height: 500 }} className='mx-auto bg-white p-12 rounded-xl shadow-green-600'>
        <ResponsiveContainer>
          <AreaChart
            data={xvalue}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
        
    );
};

export default Statistics;