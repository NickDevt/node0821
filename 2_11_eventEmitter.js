// Emitter - это транслятор событий. Он обеспечивает передачу информации от одной сущности тем, котрые на неё подписаны
// По сути, это менеджер передачи информации о событиях
// Неплохое объяснение тут  - https://medium.com/@an_parubets/pattern-event-emitter-js-9378aa082e86
// Оф докуентация - https://nodejs.org/dist/latest-v14.x/docs/api/events.html#events_emitter_on_eventname_listener


//events это стандартный модуль
const EventEmitter = require('events')

// Создаем класс на основе эмиттера
class Logger extends EventEmitter  {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger()

logger.on('message', data => {
    console.log(data)
})

logger.log('Hello')