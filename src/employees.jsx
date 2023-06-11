import React from 'react'
import ReactDOM from 'react-dom'
import Page from './Page.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <Page />
        </React.StrictMode>
    </Router>,
    document.getElementById('content')
)