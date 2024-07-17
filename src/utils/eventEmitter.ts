type Listener = (...args: any[]) => void;

export default class EventEmitter {
  private events: { [eventName: string]: Listener[] };

  constructor() {
    this.events = {};
  }

  /**
   * @param {string} eventName
   * @param {Listener} listener
   * @returns {EventEmitter}
   */
  on(eventName: string, listener: Listener): EventEmitter {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
    return this;
  }

  /**
   * @param {string} eventName
   * @param {Listener} listener
   * @returns {EventEmitter}
   */
  off(eventName: string, listener: Listener): EventEmitter {
    if (!this.events[eventName]) {
      return this;
    }
    this.events[eventName] = this.events[eventName].filter(l => l !== listener);
    return this;
  }

  /**
   * @param {string} eventName
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(eventName: string, ...args: any[]): boolean {
    if (!this.events[eventName]) {
      return false;
    }
    this.events[eventName].forEach(listener => listener(...args));
    return true;
  }
}

/*
const emitter = new EventEmitter();

function responseToEvent(message: string) {
  console.log(message);
}

// Register an event listener
emitter.on('greet', responseToEvent);

// Emit an event
emitter.emit('greet', 'Hello, World!'); // Output: Hello, World!

// Remove the event listener
emitter.off('greet', responseToEvent);

// Emit the event again (no output because the listener has been removed)
emitter.emit('greet', 'Hello, World!');

*/
