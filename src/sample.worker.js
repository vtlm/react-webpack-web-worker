console.log('worker start')

self.addEventListener('message', event => {
  if (event.data === 'ping') {
    self.postMessage('pong')
  }
})

const sender = () => {
  self.postMessage('hey!')

  // requestAnimationFrame(sender)
}

setInterval(sender, 200)
