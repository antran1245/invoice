import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Container fluid className='m-0 p-0' data-color-mode="light">
      <Sidebar />

    </Container>
  );
}

export default App;
