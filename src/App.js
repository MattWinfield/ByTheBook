import { Create } from './components/create';
import { Read } from './components/read';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import { Edit } from './components/edit';

//
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">{/* Navbar */}
          <Container>
            <Navbar.Brand href="/">ByTheBook</Navbar.Brand>
            <Nav className="me-auto">
              {/* Nav Links to each Component and the paths */}
              <Nav.Link href="/create">Add Book</Nav.Link>
            </Nav>
          </Container>
        </Navbar>{/* Close Navbar */}
        <Switch>{/* Switch Statement for CSR */}
          {/* Set up route paths to each component */}
          <Route path="/" component={Read} exact></Route>
          <Route path="/create" component={Create}></Route>
          <Route path="/read" component={Read}></Route>
          <Route path="/edit/:id" component={Edit}></Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
