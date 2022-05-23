import React from 'react';
import './App.css';
import Header from "./Header";
import Technologies from "./Technologies";


function App() {
    return (
        <div className="App">
            {/*Hello, samurai! Let's go!*/}
            <Header attribute={1}/>
            <Technologies attribute={1}/>
        </div>
    );
}

export default App;
