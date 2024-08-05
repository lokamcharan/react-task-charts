import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./task/Dashboard";
import MainApp from "./task/main";
// import MainApp from './task/main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="global">
          <Dashboard />
        </div>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/main" element={<MainApp />} />
        </Routes>
      </BrowserRouter>
      {/* <Dashboard/> */}
      {/* <MainApp/> */}
    </div>
  );
}

export default App;
