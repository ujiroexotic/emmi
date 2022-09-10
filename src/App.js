//import logo from './logo.svg';
//import './App.css';
import NavbarComponent from './navbarComponent';
import PostDetailComponent from './PostDetailComponent';
import Login from './LoginComponent';
//import CarouselComponent from './carouselComponent';
import Error404 from './Error404';
import HomeComponent from './home';
//import FooterComponent from './footerComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreatePost from './CreatePost';
import FooterComponent from './footerComponent';
import TutorialComponent from './tutorials';
//import { UserContext } from './UserContext';
import { useContext } from 'react';
//import { useState } from 'react';
import { ThemeContext } from '.';
import Button from 'react-bootstrap/Button';
import ReduxTutorials from './reduxTutorials';
import Register from './RegisterComponent';
import PrivateRoute from './PrivateRoute';
import CreateImages from './CreateImages';

function App() {
  //const [name, setName] = useState ('Welcome Ujiro')
   const [theme, toggleTheme] = useContext(ThemeContext)
   //console.log('theme is this', theme)
  return ( 
    
    <div className="App" style={{background: theme.background, color:theme.foreground}} >
      
      <Router>
      <header>
        < NavbarComponent />
        {/* <Button variant="outline-secondary" onClick={toggleTheme}>Go Back Home</Button> */}
      </header>
      <Switch>
        <Route exact path="/">
        {/* <h1 style={{color: theme.foreground}}>Testing Header</h1> */}
         <HomeComponent />
        </Route>
      
      
        <Route exact path="/create">
          <PrivateRoute>
          <CreatePost />
          </PrivateRoute>
         
        </Route>
        <Route exact path="/image">
          <PrivateRoute>
          <CreateImages />
          </PrivateRoute>
         
        </Route>
        <Route exact path="/tutorial">
         <TutorialComponent />
        </Route>
        <Route exact path="/redux">
         <ReduxTutorials />
        </Route>
      
      
        <Route exact path="/posts/:id">
         <PostDetailComponent />
        </Route>
        <Route exact path="/login">
         <Login/>
        </Route>
        <Route exact path="/register">
         <Register/>
        </Route>
        <Route path = "*">
          <Error404/>
        </Route>

      </Switch>
      <FooterComponent/>
      </Router>
      </div>
    
   );
}
 
export default App;

  

