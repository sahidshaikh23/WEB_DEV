

function greeting(name){
    return new Promise(function exe(resolve){
        let greet = `Hello ${name}`;

        resolve(greet);
        
    })
}


let p = greeting("Mithun");

p.
then(function exe(val){
    console.log(val);
})