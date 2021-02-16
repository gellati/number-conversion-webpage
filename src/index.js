import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './i18n'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <App />
            </Router>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
)
