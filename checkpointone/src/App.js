import './App.css';
import Description from './Components/Description';
import Name from './Components/Name';
import Price from './Components/Price';
import Pic from './Components/Pic';
import Card from 'react-bootstrap/Card';

function App() {
  var name = "Achref"
  return (
    <div className='center'>
      <h3 id='title'>Hello {name}</h3>
      <Card style={{ width: '18rem' }}>
      <Pic/>
      <Card.Body>
            <Name/>
            <Description/>
            <Price/>
      </Card.Body>
    </Card>

      
    </div>
  );
}

export default App;
