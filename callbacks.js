// a basic setup to mimic a request to a server for blog posts.


const posts = [
    { title: "Post One", body:"this is post one"},
    { title: "Post Two", body:"this is post two"}
];

// this mimics fetching from a server.
function getPosts() {
    setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
        output += `<li>${post.title}</li> <li>${"Good Job"}</li>`;
    });
    document.body.innerHTML = output;
    }, 1000)
}    

// this function mimics a create post which posts to the post array

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000)
}

getPosts(); 