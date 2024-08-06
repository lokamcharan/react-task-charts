
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './main.css';

const dataLine = [
  { name: '6/30/2024 - 7/6/2024', orders: 4, sales: 1404, avgOrderValue: 351 },
  { name: '7/7/2024 - 7/13/2024', orders: 2, sales: 800, avgOrderValue: 400 },
  { name: '7/21/2024 - 7/27/2024', orders: 2, sales: 500, avgOrderValue: 250 },
];


const dataPie = [
  { name: 'WooCommerce Store', value: 55.8 },
  { name: 'Shopify Store', value: 44.2 },
];

const COLORS = ['#E56162', '#10E1E9'];

const MainApp = () => {
  
  const customTooltip = ({ payload, label }) => {
    if (payload && payload.length) {
      const currentData = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${new Intl.NumberFormat('en').format(entry.value)}`}
            </p>
          ))}
          <p style={{ color: '#8884d8' }}>Avg Order Value: {currentData.avgOrderValue}</p>
        </div>
      );
    }
    return null;
  };

  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        transform={`rotate(-95, ${x}, ${y})`}
      >
        {`${dataPie[index].value}%`}
      </text>
    );
  };

  const formatYAxisLeft = (tick) => {
    return tick >= 1000 ? `${(tick / 1000).toFixed(1)}k` : tick;
  };

  const formatYAxisRight = (tick) => {
    const tickMap = {
      0: 0,
      '-1': 1,
      1: 1,
      3: 3,
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
          <h3 style={{ display: 'flex', alignItems: 'center',color:'#808080'}}>
            Sales vs Orders
            <img src='alert.png' alt='' width='25px' style={{ marginLeft: '10px' }} />
          </h3>
          <LineChart width={700} height={400} data={dataLine}>
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
            <Tooltip content={customTooltip} />
            <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#FF8042" dot={{ r: 6 }} />
            <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#0088FE" dot={{ r: 6 }} />
          </LineChart>

          <div className='date'>
            <p>6/30/2024 - 7/6/2024</p>
          </div>
        </div>
        <div className="chart">
          <h3 style={{ display: 'flex', alignItems: 'center' ,color:'#808080'}}>
            Portion of Sales 
            <img src='alert.png' alt='' width='25px' style={{ marginLeft: '10px' }} />
          </h3>
          <div style={{ transform: 'rotate(95deg)', display: 'inline-block' }}>
            <PieChart width={380} height={360}>
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
          </div>
          <div className='pie-text'>
            <p style={{ textAlign: "center" }}>Total</p>
            <h3 style={{ textAlign: "center" }}>2629</h3>
          </div>
          <div className='dot'>
          <p>
            <img src='dot1.png' width={'20px'} alt="WooCommerce Store" /> WooCommerce Store 
            <img src='dot3.png' width={'20px'} alt="Shopify Store" /> Shopify Store
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MainApp;
