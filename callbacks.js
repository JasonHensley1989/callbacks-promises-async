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
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    }, 1000)
}    

// this function mimics a create post which posts to the post array
// because the timeout is longer than the getPosts the DOM is already
// finished executing, therefore a callback is needed to push the post
// before the DOM is executed, the callback 
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}


createPost({ title: "Post Three", body: "new post body"}, getPosts);