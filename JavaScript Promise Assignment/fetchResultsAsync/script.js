
async function fetchOut(){

    let result = await fetch("https://jsonplaceholder.typicode.com/todos/1")

    let data = await result.json();
    console.log(data);

}

fetchOut();