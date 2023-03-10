import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import InvoiceContext from './context/InvoiceContext';
import './App.css';
import './sass/App.scss'
import OverlayForm from './components/OverlayForm';

function App() {
  const [theme, setTheme] = useState<boolean>(false)

  return (
    <InvoiceContext>
      <Container fluid className='m-0 p-0' data-color-mode={theme ? 'dark' : 'light'}>
        <Sidebar theme={theme} setTheme={setTheme} />
        <OverlayForm />
        <Main />
      </Container>
    </InvoiceContext>
  );
}

export default App;
