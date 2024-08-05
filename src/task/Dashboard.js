
import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
      <ul>
  <li class="nav-item">
    <Link to="/main" style={{ textDecoration: "none", color: "black" }}>
      <img src="deshborad 1.jpg" alt="dashboard" width='25px' class="nav-icon" />
      Dashboard
    </Link>
  </li>
  <li class="nav-item">
    <img src="inventory.png" alt=""  width='25px' class="nav-icon" />
    Inventory
  </li>
  <li class="nav-item">
    <img src="order.jpg" alt="" width='25px' class="nav-icon" />
    Order
  </li>
  <li class="nav-item">
    <img src="return.jpg" alt="" width='25px' class="nav-icon" />
    Returns
  </li>
  <li class="nav-item">
    <img src="customers.png" alt="" width='25px' class="nav-icon" />
    Customers
  </li>
  <li class="nav-item">
    <img src="shipping.jpg" alt="" width='25px'class="nav-icon" />
    Shipping
  </li>
  <li class="nav-item">
    <img src="channel.jpg" alt="" width='25px'class="nav-icon" />
    Channel
  </li>
  <li class="nav-item">
    <img src="integrations.jpg" alt=""width='25px' class="nav-icon" />
    Integrations
  </li>
  <li class="nav-item">
    <img src="calculator.jpg" alt="" width='25px' class="nav-icon" />
    Calculators
    <img src="arrow1.png" alt="" class="nav-icon right-icon" />
  </li>
  <li class="nav-item">
    <img src="report.png" alt="" width='25px'class="nav-icon" />
    Reports
    <img src="arrow1.png" alt="" class="nav-icon right-icon" />
  </li>
  <li class="nav-item">
    <img src="account.jpg" alt="" width='25px'class="nav-icon" />
    Account
    <img src="arrow1.png" alt="" class="nav-icon right-icon" />
  </li>
</ul>

      </div>
    </div>
  );
}

export default Dashboard;
