import{EventEmitter} from 'node:events';
// event emitter is a class
const task = new EventEmitter();
console.log(task);


const sayHi = (name) => {
    console.log(`Logged In ${name}`);
}

const starts = () => {
    console.log('System started');
    
}

task.once('greet', starts);

task.on('greet', sayHi); 
task.on('greet',(name)=>{
    console.log(`${name} starts shopping`);
    
});
task.on('greet',(name)=>{
    console.log(`${name} logged out`);
    
});
task.emit('greet', 'Anil Pandey');
task.emit('greet', 'Ajay Mishra');