// const doorsUtil = require('./utils/doors');
const { passDoors, printDoors } = require('./utils/doors');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let state = {
    doors: '',
    passes: '',
    result: ''
}

//getting user input
rl.question('How many doors?', (doors)=>{
    state.doors = doors;

    rl.question('How many passes?', (passes)=>{
        state.passes = passes;

        console.log('doors', state.doors);
        console.log('passes', state.passes);
    
        // setting up the initial state
        for (let i = 0; i < state.doors; i++){
            state.result += '#';
        }
    
        for (let i = 0; i < state.passes; i++){
            state.result = passDoors(state.result, i + 1);
        }
    
        printDoors('Final state: ' + state.result);
        rl.close();
    })
    })

rl.on('close', ()=>{
    console.log('Application closing');
    process.exit(0);
});
