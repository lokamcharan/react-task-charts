
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './main.css';

const dataLine = [
  { name: '6/30/2024 - 7/6/2024', orders: 5, sales: 1404, avgOrderValue: 351 },
  { name: '7/7/2024 - 7/13/2024', orders: 4, sales: 1200, avgOrderValue: 467 },
  { name: '7/21/2024 - 7/27/2024', orders: 1, sales: 1000, avgOrderValue: 1000 },
];

const dataPie = [
  { name: 'WooCommerce Store', value: 55.8 },
  { name: 'Shopify Store', value: 44.2 },
];

const COLORS = ['#E56162', '#10E1E9'];

const MainApp = () => {
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${dataPie[index].value}%`}
      </text>
    );
  };

 
  const formatYAxisLeft = (tick) => {
    if (tick === 0) return '0k';
    return tick >= 1000 ? `${(tick / 1000).toFixed(1)}k` : `${(tick / 1000).toFixed(1)}k`;
  };


  const formatYAxisRight = (tick) => {
    const tickMap = {
      0: 0,
      2: 1,
      4: 2,
      6: 3,
      8: 4,
    };
    return tickMap[tick] !== undefined ? tickMap[tick] : tick;
  };

  return (
    <div className="main-content">
      <div className='navbar'>
        <h3>Dashboard</h3>
      </div>
      <div className="charts">
        <div className="chart">
          <h3 style={{ display: 'flex', alignItems: 'center' }}>
            Sales vs Orders
            <img src='alert.png' alt='' width='25px' style={{ marginLeft: '10px' }} />
          </h3>
          <LineChart width={750} height={400} data={dataLine}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" tickFormatter={formatYAxisLeft} />
            <YAxis yAxisId="right" orientation="right" tickFormatter={formatYAxisRight} />
            <Legend 
              layout="horizontal" 
              verticalAlign="top" 
              align="center" 
              wrapperStyle={{ paddingBottom: 20 }}
            />
            <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
            <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#FF8042" dot={{ r: 6 }} />
            <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#0088FE" dot={{ r: 6 }} />
            <Line yAxisId="left" type="monotone" dataKey="avgOrderValue" stroke="#82ca9d" dot={{ r: 6 }} />
          </LineChart>
        </div>
        <div className="chart">
          <h3 style={{ display: 'flex', alignItems: 'center' }}>
            Portion of Sales 
            <img src='alert.png' alt='' width='25px' style={{ marginLeft: '10px' }} />
          </h3>
          <PieChart width={360} height={400}>
            <Pie
              data={dataPie}
              cx={200}
              cy={200}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false} 
            >
              {dataPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          <p>
            <img src='dot1.png' width={'20px'} alt="WooCommerce Store" /> WooCommerce Store 
            <img src='dot3.png' width={'20px'} alt="Shopify Store" /> Shopify Store
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainApp;


