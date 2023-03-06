// a basic setup to mimic a request to a http server


const posts = [
    { title: "Post One", body:"this is post one"},
    { title: "Post Two", body:"this is post two"}
];

function getPosts() {
    setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    }, 5000)
}    

getPosts();