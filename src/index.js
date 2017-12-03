import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import initActors from './actors'

initActors()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
