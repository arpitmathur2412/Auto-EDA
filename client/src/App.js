import './App.css';
import {
  Routes,
  Route
} from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import SignIn from "./routes/SignIn"
import UserState from './components/context/users/UserState';

function App() {
  return (
    <>
      <div className="App">
        <div className="app">
        <UserState>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/service'} element={<Service/>}/>
            <Route path={'/signin'} element={<SignIn/>}/>
          </Routes>
        </UserState>
        </div>
      </div>
      </>
  );
}

export default App;
