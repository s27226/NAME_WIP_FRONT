import React, { useState } from 'react';
import './Stylesheet/Login.css';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.text();
            setMessage(`Zalogowano: ${data}`);
        } else {
            setMessage('Błąd logowania');
        }
    };

    return (
        <div className="App">
            <h2>Logowanie</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Login" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <input type="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Zaloguj</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default App;