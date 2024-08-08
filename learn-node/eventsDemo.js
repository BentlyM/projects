import { error } from 'console';
import { EventEmitter } from 'events';

// great for creating your own events

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello' + name);
}

function goodbyeHandler(name){
    console.log('Goodbye' + name);
}

myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

myEmitter.emit('greet', 'john');
myEmitter.emit('goodbye', 'john');

// Error handling
myEmitter.on('error', (err) => {
    console.log('An Error Occurred:', err);
});

// simulate error
myEmitter.emit('error', new Error('Something went wrong'));