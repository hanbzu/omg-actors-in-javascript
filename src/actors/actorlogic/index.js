import uuid from 'uuid/v1'

export class Dispatcher {
  static receptionCallbacks = {}

  static subscribe(actorType, actorId, receiveFunction) {
    this.receptionCallbacks[actorId] = receiveFunction
    console.log(`👶 ${actorType} ${actorId.substring(0, 8)}`)
  }

  static send(msg, recipient, sender = 'OUTSIDE') {
    console.log(
      `✉️ %c${msg.type} %c${sender.substring(0, 8)} → ${recipient.substring(0, 8)}`,
      'color: #bada55',
      'color: default'
    )
    const callback = this.receptionCallbacks[recipient]

    if (callback) {
      callback({ ...msg, sender }) // Add the sender to the message
    } else {
      console.error(`Dispatcher: Sorry, actor ${recipient} not found!`)
    }
  }
}

export class Actor {
  actorId = uuid()

  constructor(props = {}) {
    this.actorId = uuid()
    this.actorType = this.constructor.name.toUpperCase()
    Dispatcher.subscribe(this.actorType, this.actorId, this.receive.bind(this))
  }

  send(msg, recipient) {
    Dispatcher.send(msg, recipient, this.actorId)
  }

  receive(msg) {
    throw new Error("Method 'receive' needs to be implemented so your can receive messages!")
  }
}
