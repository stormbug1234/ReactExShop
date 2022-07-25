import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">구매내역</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Summary">Summary</Nav.Link>
            <Nav.Link href="#monthly">monthly</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main_bg" ></div>
      <div className="row">
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
      </div>

      <br />
    </div>
    </>
  );
}

export default App;
