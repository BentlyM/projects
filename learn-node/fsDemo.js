//import fs from 'fs'
import fs from 'fs/promises'

// fs.readFileSync('./learn-node/text.txt', 'utf8', (err , data) => {
//     if(err) throw err;
//     console.log(data);
// });

// const data = fs.readFileSync('./learn-node/text.txt', 'utf-8');
// console.log(data);

// import fs from 'fs/promises'
// fs.readFile('./learn-node/text.txt', 'utf-8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

const readFile = (async () => {
    try{
        const data = await fs.readFile('./learn-node/text.txt', 'utf-8');
        console.log(data);
    }catch(error){
        console.log(error);
    }
})();

// writeFile()

const writeFile = (async () => {
    try{
        await fs.writeFile('./learn-node/text.txt', 'Hello, i am writing to this file');
        console.log('File written too...');
    }catch(err){
        console.log(err);
    }
})();

const appendFile = (async ()=>{
    try{
        await fs.appendFile('./learn-node/text.txt', '\nThis is append text');
        console.log('File appended to...');
    }catch(error){
        console.log(error);
    }
})();