import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarWithHeader from './components/SideBarWithHeader';
import Chartt from './components/Chartt';
import Head from './components/Head';
import User from './users/User';
import 'bootstrap/dist/css/bootstrap.css';
import AdminNavbar from './navbar/Navbar';
import {
  Box
} from "@chakra-ui/react";
import Profile from './components/Profile';
import { Card } from 'reactstrap';
import TeamMembers from './components/TeamMembers';
import Annonces from './annonces/Annonces';
function App() {
  return (
    <Router>
      
      <Routes>
       
        
        <Route path="/" element={<SidebarWithHeader><Chartt /></SidebarWithHeader>} />
        <Route
  path="/dashboard"
  element={
    <SidebarWithHeader>
              <AdminNavbar  />

            <h2 style={{padding:"17px", color:" #00516D"}}> Dashboard</h2>

      <Head />

      <div className="row" style={{display:"flex"}}>
        <div className="col-md-6 mb-3" style={{borderRadius:"15px",}}>
          <Card
            style={{
              borderRadius:"15px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              background: "#F7FAFC",
              marginBottom: "30px",
              marginLeft: "30px", // Add margin-left of 30px
              marginRight: "30px",
              height:"45%" // Add margin-right of 30px
            }}
          >
            <Chartt />
          </Card>

          <Card
            style={{
              borderRadius:"15px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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

        <div className="col-md-6" style={{width: "50%",borderRadius:"15px", }}>
          <Card
            style={{
               
              borderRadius:"15px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              background: "#F7FAFC",
              marginLeft: "30px", // Add margin-left of 30px
              marginRight: "30px",
              height:"60%" // Add margin-right of 30px
            }}
          >
            <h3> Team members </h3>
            <TeamMembers />
            <TeamMembers />
            <TeamMembers />
            <TeamMembers />
            <TeamMembers />
            <TeamMembers /> {/* Adjust the width as needed */}
          </Card>
        </div>
      </div>

    </SidebarWithHeader>
  }
/>

        <Route path="/Users" element={<SidebarWithHeader>  <AdminNavbar  /> <User /></SidebarWithHeader>} />
        <Route path="/Profile" element={<SidebarWithHeader><AdminNavbar  /><Box ><h1>Profile</h1></Box><Profile /></SidebarWithHeader>} />
        <Route path="/Posts" element={<SidebarWithHeader><Annonces /></SidebarWithHeader>} />
        <Route path="/Test" element={<SidebarWithHeader><AdminNavbar /><TeamMembers /></SidebarWithHeader>} />

      </Routes>
    </Router>
  );
}

export default App;
