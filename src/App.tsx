import './App.css'
import React from "react";
import RouterProviderContainer from "./routes/routerProvider";

function App() {
    return (
        <div className={'app-container'}>
            <RouterProviderContainer/>
        </div>
    )
}

export default App
