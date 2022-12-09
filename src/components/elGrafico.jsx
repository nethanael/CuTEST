import React from 'react';
import { LineChart, Line, XAxis, 
    YAxis, CartesianGrid, Tooltip } from 'recharts';
  
const ElGrafico = (props) => {
  
    // aca pueden llegar dos tipos de arrays, o la grafica incial o la grafica custom
    const { scrobbles: data } = props;
    console.log(Math.max(...data));

    return (
    <LineChart 
        width={500} 
        height={300} 
        data={data} 
        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
    >
        <XAxis 
            dataKey="elapsed"
        />
        <YAxis 
            unit="Kbps" 
            domain={[0, 12]}         // estable el rango del eje y, en ese caso de 0 a 30000 Kbps
            //label="Kbps"
        />
        <CartesianGrid 
            stroke="#ddd" 
            //strokeDasharray="5 5"
            vertical='False'
        />
        <Line 
            name ="Kbps A" 
            type="basis" 
            dataKey="Kbps 1" 
            stroke="#8884d8" 
            activeDot={{ r: 8 }}
            isAnimationActive 
        />
        <Line 
            name ="Kbps B" 
            type="basis" 
            dataKey="Kbps 2" 
            stroke="#82ca9d"
            isAnimationActive
        />
        <Tooltip />
    </LineChart>
    );
}
  
export default ElGrafico;