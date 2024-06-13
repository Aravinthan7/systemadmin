import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Adminpage from './Pages/Adminpage';
import './CSS/custom.css';
import '/node_modules/primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-teal/theme.css';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <BrowserRouter>
    <Routes>
     
        <Route index element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Administrator" element={<Adminpage />} />
        {/* <Route path="*" element={<NoPage />} /> */}
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
