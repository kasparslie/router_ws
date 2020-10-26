import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './home';
import HTML from './fileHTML'
import CSS from './fileCSS'
import JScript from './fileJS'
import Header from './header'

function App() {
  return (
<>
<Header/>
 <Switch>
   <Route exact path='/' component={Home}></Route>
   <Route path='/fileHTML' component={HTML}></Route>
   <Route path='/fileCSS' component={CSS}></Route>
   <Route path='/fileJS' component={JScript}></Route>
 </Switch>
 </>
  );
}

export default App;
