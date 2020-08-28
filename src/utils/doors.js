const passDoors = (doors, passNumber) => {
    let data = Array.from(doors);
    for(let i = passNumber - 1; i< data.length; i+=passNumber){
        if (data[i] === '#'){
            data[i] = '@';
        } else if (data[i] === '@'){
            data[i] = '#';
        }
    }
    //convert back to string
    const output = data.toString().replace(/,/gi, '');
    printDoors(output);
    //return it
    return output;   
} 

const printDoors = (doors) =>{
    console.log(doors);
    return doors;
}

module.exports = {
    passDoors: passDoors,
    printDoors: printDoors
}