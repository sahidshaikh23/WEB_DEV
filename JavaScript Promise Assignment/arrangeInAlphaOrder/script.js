let books=[{
    title:"C-book", 
    author: "author-1",
    year: "year1"
}, {
    title: "A-book", 
    author: "author-2", 
    year: "year2"
}, {
    title: "B-book",
    author: "author-3",
    year: "year3"
}]


function extractTitle(books, callback){
    let titles = books.map((el)=>el.title);

    callback(titles);
}

function logTitles(titles){
    titles.sort();
    console.log(titles.join(", "))
}




extractTitle(books, logTitles)