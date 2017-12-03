import { Actor } from './actorlogic'

class Bus extends Actor {
  state = {
    alreadyStarted: false
  }

  receive(msg) {
    switch (msg.type) {
      case 'START':
        if (this.state.alreadyStarted) this.send({ type: 'ALREADY_SAID_HI' }, msg.other)
        else this.send({ type: 'HI_THERE' }, msg.other)
        this.state.alreadyStarted = true
        break

      default:
    }
  }
}

export default Bus
