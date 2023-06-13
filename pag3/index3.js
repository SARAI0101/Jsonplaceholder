const posts = document.querySelector("#posts")

fetch("https://jsonplaceholder.typicode.com/albums")
.then(response => response.json())
.then(json=>{
    let template=``
    json.forEach(element => {
        template+=`<div class="post">
        <h2>${element.userId}</h2>
            <h3>${element.id}</h3>
          <p>"${element.title}"</p>
    </div>`

    console.log(template)
    });
    posts.innerHTML=template
})