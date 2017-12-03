import { Dispatcher } from './actorlogic'
import Bus from './Bus'

const init = () => {
  const oneBus = new Bus()
  const anotherBus = new Bus()

  Dispatcher.send({ type: 'START', other: anotherBus.actorId }, oneBus.actorId)
  Dispatcher.send({ type: 'START', other: anotherBus.actorId }, oneBus.actorId)
}

export default init
