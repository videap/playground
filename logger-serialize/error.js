import {serializeError, deserializeError} from 'serialize-error';

const errorSerialized = new Error('Serialized 🦄');

const serialized = serializeError(errorSerialized);

async function waitToLog(message){
    await setTimeout(() => console.log(serialized), 3000)
}

for (let i=0; i<10; i++){
    await setTimeout(() => console.log(serialized), 3000)
}
