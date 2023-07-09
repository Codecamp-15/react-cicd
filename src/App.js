import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState(null);

    async function fetchData() {
        try {
            let response = await axios.get('http://139.5.147.220:8000');
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload!
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
                <button onClick={fetchData}>SEND REQUEST</button>
                {data ? <p>{data}</p> : null}
            </header>
        </div>
    );
}

export default App;
