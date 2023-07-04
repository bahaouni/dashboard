import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarWithHeader from './components/SideBarWithHeader';
import Users from './components/Users';
import ColumnChart from './components/Test';
import Head from './components/Head';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SidebarWithHeader><Users /></SidebarWithHeader>} />
        <Route path="/dashboard" element={<SidebarWithHeader><Head /></SidebarWithHeader>} />
        <Route path="/Users" element={<SidebarWithHeader></SidebarWithHeader>} />
        <Route path="/Profile" element={<SidebarWithHeader><Users /></SidebarWithHeader>} />
        <Route path="/Posts" element={<SidebarWithHeader><Users /></SidebarWithHeader>} />
        <Route path="/Test" element={<SidebarWithHeader><Head /></SidebarWithHeader>} />

      </Routes>
    </Router>
  );
}

export default App;
