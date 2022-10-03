
import './App.css';
import Login from './Login.js';
import SignUp from './SignUp';
import AdminDashboard from './Admin/AdminDashboard';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Institute from './Admin/Institute';
import Courses from './Admin/Courses';
import StudentList from './Admin/ViewStudentList';
import Admissions from './Admin/Admissions';
import UserDashboard from './User/Dashboard';
import UserAdmission from './User/Admission';
import Logout from './Logout';
import ViewUserAdmission from './User/ViewAdmission';


function App() {
  return (
    <div className="App"> 
    <Router>
    <Routes>
    <Route exact path='/' element= {<Home />}></Route> 
    <Route exact path="/Login" element={< Login/>}></Route>
    <Route exact path="/signup" element={< SignUp/>}></Route>
    <Route exact path="/institutes" element={< Institute/>}></Route>
    <Route exact path="/courses" element={<Courses/>}></Route>
    <Route exact path="/studentList" element={< StudentList/>}></Route>
    <Route exact path="/admissions" element={< Admissions/>}></Route>
    <Route exact path="/adminDashboard" element={< AdminDashboard/>}></Route>
    <Route exact path="/userDashboard" element={< UserDashboard/>}></Route>
    <Route exact path="/userAdmission" element={<UserAdmission/>}></Route>
    <Route exact path="/Logout" element={<Logout/>}></Route>
    <Route exact path="/viewUserAdmission" element={<ViewUserAdmission/>}></Route>
    </Routes> 
    </Router>
    </div>
  );
}

export default App;
