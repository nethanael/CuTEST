import React from 'react';
import { LineChart, Line, XAxis, 
    YAxis, CartesianGrid } from 'recharts';
  
const elGrafico = (props) => {
  
    // Sample data
    const data = props.data;
  
    return (
        <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="elapsed"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    );
}
  
export default elGrafico;