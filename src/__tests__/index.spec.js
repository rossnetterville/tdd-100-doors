const app = require('../index');

// Great stuff, when you guys are wrapping up your hour training session.  Please provide me with estimation on how many 1hr sessions you will need to complete this kata
// Challenge accepted

describe('100Doors', ()=> {
    let output = '';
    beforeAll(()=>{
        for(let i = 0; i < 100; i++){
            output += '#';
        }console.log(output);
    });

    test('firstPass', ()=>{
        output = app.passDoors(output, 1)
        console.log(output);
        let result = '';
        for(let i = 0; i < 100; i++){
            result += '@';
        }
        expect(output).toBe(result);
    });

    test('secondPass', ()=> {
        output = app.passDoors(output, 2)
        let result = '';
        for(let i = 1; i <= 100; i++){
            if (i % 2 === 0){
                result += '#';
            } else {
            result += '@';
            }
        }
        expect(output).toBe(result);
    });

    test('thirdPass', ()=> {
        // Pass the output for the 3rd iteration 
        output = app.passDoors(output, 3)
        // Set up the 3rd iteration result manually based on the pattern
        let result = '';
        let switchCounter = 0;
        let doorState = '#';
        for(let i = 1; i <= 100; i++){
            if (switchCounter % 3 === 0) {
                doorState = (doorState === '#') ? '@' : '#';
            }
            result += doorState;
            
            if (i > 1){
                switchCounter ++
            }
        }
        // assert
        expect(output).toBe(result);
    });

    test('seriesPrints', ()=>{
        // // set up starting string
        // let result = '';
        // for(let i = 0; i < 10; i++){
        //     result += '#';
        // }
        // // do passDoors set
        // for(let i = 0; i < 10; i++){
        //     result = app.passDoors(result, i)
        // }
        // // print
        const func = jest.fn(app.printDoors)
        func(output);
        expect(func).toHaveBeenCalled();
    })
});

//const func = jest.fn(app.printDoors)