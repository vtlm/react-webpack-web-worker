import React from 'react'
import ReactDOM from 'react-dom'

import Worker from 'worker-loader!./sample.worker'

const title = 'My Minimal React Webpack Babel Setup 2'

import worker_script from './worker'
var myWorker = new Worker(worker_script)

myWorker.onmessage = m => {
  console.log('msg from worker: ', m.data)
}
myWorker.postMessage('im from main')

let w = new Worker()
w.postMessage('ping')
w.onmessage = event => {
  console.log(event.data)
}

ReactDOM.render(<div>{title}</div>, document.getElementById('app'))

// module.hot.accept()
