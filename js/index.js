const posts = document.querySelector("#posts")

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(json=>{
    let template=``
    json.forEach(element => {
        template+=`<div class="post">
        <h2>${element.name}</h2>
            <h3>${element.username}</h3>
          <p>"${element.email}"</p>
    </div>`

    console.log(template)
    });
    posts.innerHTML=template
})