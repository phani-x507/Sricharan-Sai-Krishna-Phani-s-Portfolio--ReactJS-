import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavigationBar from './NavigationBar';
import CharacterEntity from './CharacterEntity';
import './App.css';
import './CSS/Main.css';
import Home from './Home';
import Projects from './Projects';




function App() {
 return(
   <div className='Main_body'> 
    <NavigationBar />
     <Home />
     <Projects />

     
      
      
      </div>
   

 )
}

export default App;
