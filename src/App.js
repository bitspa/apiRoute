import logo from './logo.svg';
import './App.css';
import FormValidation from './Components/Formvalidation'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './Components/Profile';
import Login1 from './Components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FormValidation />} exact />
          <Route path="/profile" element={<Profile/>} exact />
          <Route path="/login" element={<Login1/>} exact />
        </Routes>
      </Router>
      {/* <Form /> */}
    </div>
  );
}

export default App;

