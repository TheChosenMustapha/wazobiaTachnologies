import { useSelector } from 'react-redux';
import { selectUser } from './features/Userslice';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
// import Forgotpassword from './Forgotpassword';


const App = () => {
  const user = useSelector(selectUser);

  return  <div>{user ? <Signin/> : <Signup/>}</div>;
  
};
  <Router>
   
      <Routes>
        <Route exact path= "/signin" element={<Signin/>}/>
        <Route exact path= "/signup" element={<Signup/>}/>
      </Routes>
   </Router> 
export default App;