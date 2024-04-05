// import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// const data = [
//     { name: 'Jan', value: 100 },
//     { name: 'Feb', value: 200 },
//     { name: 'Mar', value: 150 },
//     { name: 'Apr', value: 300 },
//     { name: 'May', value: 250 },
//     { name: 'Jun', value: 400 },
// ];

// const AreaChartComponent = () => (
//     <div className="bg-white p-4 rounded-lg mt-10">
//         <AreaChart
//             width={1200}
//             height={400}
//             data={data}
//             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//         >
//             <defs>
//                 <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//                     <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
//                 </linearGradient>
//             </defs>
//             <XAxis dataKey="name" />
//             <YAxis />
//             {/* <CartesianGrid strokeDasharray="3 3" /> */}
//             <Tooltip />
//             <Area
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#8884d8"
//                 fillOpacity={1}
//                 fill="url(#colorPv)"
//             />
//         </AreaChart>
//     </div>
// );

// export default AreaChartComponent;


import { Radar, RadarChart, PolarGrid, PolarRadiusAxis, PolarAngleAxis, Legend } from 'recharts';
const AreaChartComponent = () => {


    const data = [
        {
            "subject": "Cardiology",
            "A": 120,
            "B": 110,
            "fullMark": 150
        },
        {
            "subject": "Endocrinology",
            "A": 98,
            "B": 130,
            "fullMark": 150
        },
        {
            "subject": "Infectious",
            "A": 86,
            "B": 130,
            "fullMark": 150
        },
        {
            "subject": "Pediatrics",
            "A": 99,
            "B": 100,
            "fullMark": 150
        },
        {
            "subject": "Neurology",
            "A": 85,
            "B": 90,
            "fullMark": 150
        },
        {
            "subject": "Oncology",
            "A": 65,
            "B": 85,
            "fullMark": 150
        }
    ]

    return (
        <div className="bg-white p-4 rounded-lg mt-10">
            <RadarChart outerRadius={90} width={330} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                {/* <Legend /> */}
            </RadarChart>
        </div>

    )


}

export default AreaChartComponent;
