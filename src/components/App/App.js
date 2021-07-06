import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SingUp'
import Dashboard from '../Dashboard/Dashboard'
import NavBar from '../Layout/NavBar'
import CreateProject from '../Projects/CreateProject'
import ProjectDetails from '../Projects/ProjectDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
