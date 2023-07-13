import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarWithHeader from './components/SideBarWithHeader';
import Chartt from './components/Chartt';
import Head from './components/Head';
import User from './users/User';
import 'bootstrap/dist/css/bootstrap.css';
import AdminNavbar from './navbar/Navbar';
import DrawerExample   from  './users/DrawerExemple';
import {
  Box
} from "@chakra-ui/react";
import Profile from './components/Profile';
import { Card } from 'reactstrap';
import TeamMembers from './components/TeamMembers';
import Annonces from './annonces/Annonces';
import {  AddIcon } from '@chakra-ui/icons'
import Motion from './components/Motion';
import { useState } from 'react';
import './App.css'
import Signin from './Signin/Signin';
import Signup from './Signin/Signup';
import Forgotpassword from './Signin/Forgotpassword';
import Reset from './Signin/Reset';


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAddUser = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Router>
      
      <Routes>
       
        
        <Route path="/" element={<Signin />} />
        <Route
  path="/dashboard"
  element={
    <SidebarWithHeader>
              <AdminNavbar  />

            <h2 style={{padding:"5px", color:" #00516D"}}> Dashboard</h2>

      <Head />

      <div className="row" style={{display:"flex"}}>
        <div className="col-md-6 mb-3" style={{borderRadius:"15px",}}>
        <Card
            style={{
              borderRadius:"15px",
              boxShadow: ' 8px 8px 20px 4px rgba(112, 144, 176, 0.18)' ,
              background: "#F7FAFC",
              marginBottom: "30px",
              marginLeft: "20px", // Add margin-left of 30px
              marginRight: "2px",
              height:"45%" // Add margin-right of 30px
            }}
          >
            <Chartt />
          </Card>

          <Card
            style={{
              borderRadius:"15px",
              boxShadow: ' 8px 8px 20px 4px rgba(112, 144, 176, 0.18)' ,
              background: "#F7FAFC",
              marginBottom: "30px",
              marginLeft: "20px", // Add margin-left of 30px
              marginRight: "2px",
              height:"45%" // Add margin-right of 30px
            }}
          >
            <Chartt />
          </Card>
        </div>

        <div className="col-md-6" style={{width: "43%",borderRadius:"15px", }}>
          <Card
            style={{
               padding:"20px" , 
              borderRadius:"10px",
              boxShadow: ' 8px 8px 20px 4px rgba(112, 144, 176, 0.18)',
              background: "#F7FAFC",
              marginLeft: "30px", // Add margin-left of 30px
              marginRight: "30px",
              height:"75%" // Add margin-right of 30px
            }}
          >
              <Box 
    paddingBottom={"20px"}
    style={{
      
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <h3 style={{ marginRight: "10px" }}>Team members</h3>
    <button onClick={handleAddUser}>
    <AddIcon color={"blue"} background={"#ffffff"}/>
    </button>
    <DrawerExample isOpen={isDrawerOpen} onClose={handleDrawerClose} />

  </Box>
            
            <TeamMembers />
            <TeamMembers />
            <TeamMembers />
            <TeamMembers />
          {/* Adjust the width as needed */}
          </Card>
        </div>
      </div>

    </SidebarWithHeader>
  }
/>

        <Route path="/Users" element={<SidebarWithHeader><AdminNavbar  />  <h2 style={{padding:"5px", color:" #00516D"}}> Users</h2> <User /></SidebarWithHeader>} />
        <Route path="/Profile" element={<SidebarWithHeader><AdminNavbar  /><Box ><h1>Profile</h1></Box><Profile /></SidebarWithHeader>} />
        <Route path="/Posts" element={<SidebarWithHeader> <AdminNavbar  /><h2 style={{padding:"5px", color:" #00516D"}}> Posts </h2><Annonces /></SidebarWithHeader>} />
        <Route path="/Test" element={<SidebarWithHeader><AdminNavbar /><Motion /><TeamMembers /></SidebarWithHeader>} />
        <Route path="/Signin" element={<Box  ><Signin /></Box>} />
        <Route path="/auth/Sign-up" element={<Box  ><Signup /></Box>} />     
        <Route path="/Forgotpassword" element={<Box  ><Forgotpassword /></Box>} />  
        <Route path="/Reset" element={<Box  ><Reset /></Box>} />  
        <Route path="/Signup" element={<Box  ><Signin /></Box>} />

      </Routes>
    </Router>
  );
}

export default App;
