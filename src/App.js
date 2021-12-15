import logo from './logo.svg';
import Main from './components/main';
import { Create } from './components/create';
import { Read } from './components/read';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">{/* Navbar */}
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* Nav Links to each Component and the paths */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">My Shelf</Nav.Link>
              <Nav.Link href="/create">Add Book</Nav.Link>
            </Nav>
          </Container>
        </Navbar>{/* Close Navbar */}
        <Routes>{/* Switch Statement for CSR */}
          {/* Set up route paths to each component */
          /*Using the new Route-Path- element tag*/}
          <Route path="/" element={<Main />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
