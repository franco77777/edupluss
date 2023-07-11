import { Routes, Route, useNavigate } from "react-router";
import { useEffect } from "react";

import Activity from "./pages/Activity";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
//import SelectEmpresa from "./components/SelectEmpresa";
import AddStep from "./components/admin/AddStep";
import AddActivity from "./components/admin/AddActivity";
import MyActivities from "./pages/MyActivities";
import ActivitySteps from "./components/admin/ActivitySteps";
import Login from "./components/Login";
import Landing from "./pages/LandingPage";

function App() {

  return (
    <>
    
    <NavBar/>
    <Routes>
				{/* <Route path="/empresa/seleccionar" element={<SelectEmpresa />} /> */}
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/activity/:id" element={<Activity />} />
        		<Route path="/myActivities" element={<MyActivities />} />
				<Route path="/actvitySteps/:id" element={<ActivitySteps />} />
				<Route path="/addActivity" element={<AddActivity />} />
				<Route path="/addStep/:id" element={<AddStep />} />
		</Routes>
    </>
  );
}

export default App;

