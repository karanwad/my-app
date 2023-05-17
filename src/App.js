import './App.css';
import { Message } from './Message';
import  Clicker  from './Clicker'; 

function App() {

    const onHandleClick = (direction) => {
        console.log(direction)
    }

    return (
        <div className="App">
            <Message text="Hello World!!!"/>
            <Clicker onClicked={onHandleClick} />
        </div>
    );
}

export default App;