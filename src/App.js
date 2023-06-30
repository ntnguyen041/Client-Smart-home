import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from '../src/Components/Body Section/pages/home';
import Room from '../src/Components/Body Section/pages/Room';
import Seting from '../src/Components/Body Section/pages/setings';
import Driver from './Components/Body Section/pages/Driver';
import Layout from './Components/Layout/layout';
import Login from './Components/Login/Login';
import { AppProvider } from './style/context/AppContext';
import Register from './Components/Register/Register';

 
function App() {  
  return (
    <AppProvider>
     <BrowserRouter>
                <Routes>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="signup" element={<Register />}/>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="Seting" element={<Seting />}/>
                        <Route path="/Room" element={<Room />}/>
                        <Route path="Driver" element={<Driver />}/>
                    </Route>
                </Routes>
        </BrowserRouter>
        </AppProvider>
  )
}

export default App;
 