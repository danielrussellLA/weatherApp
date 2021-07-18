import React from 'react'
import ReactDOM from 'react-dom'
import App from './startpage/App'

ReactDOM.hydrate(
    <React.StrictMode>
        <App
            render={window && window.render}
            translations={window && window.translations}
        />
    </React.StrictMode>,
    document.getElementById('root')
)
