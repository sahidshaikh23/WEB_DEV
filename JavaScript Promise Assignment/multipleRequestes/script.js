async function retriveData(){
    const first = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const second = (await fetch("https://jsonplaceholder.typicode.com/posts/1"));

    let output ={
        todo: await first.json(),
        post: await second.json()
    }

    console.log(output);
}

retriveData();

