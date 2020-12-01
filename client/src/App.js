import './App.css';
import React, { useState, useEffect } from "react"

function App() {
 
    const [state, setState ] = useState({
      post: null,
      responseToPost: null
    })


    useEffect(() => {
      callApi()
    }, [])
    
    const callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
    
        return body;
    }

    callApi()
  
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: state.post }),
    });
    const body = await response.text();
    
    setState({ responseToPost: body });
  }

  return (
    <div className="App">
      <header className="App-header">
        Red Tetris
      </header>
      <p>{state.response}</p>
        <form onSubmit={handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={state.post}
            onChange={e => setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{state.responseToPost}</p>
    </div>
  );
}

export default App;
