
document.getElementById("submit").addEventListener("click", (e) =>{

    e.preventDefault();
    
    var form = {
        title : document.getElementById("title").value,
        snippet : document.getElementById("snippet").value,
        body : document.getElementById("body").value
    }

    console.log(form);

    fetch("http://localhost:3000/blog", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(form)
    })
    .then(res => res.json())
    .then(console.log)
    .catch(console.error);
})