

let outputArea=document.querySelector("body")


fetch("https://jsonplaceholder.typicode.com/posts").then(response=>{if(response.ok){
    outputArea.innerHTML=response.json();
}else{throw `Network response was not ok`}})
.catch(error=>outputArea.innerHTML=error)

