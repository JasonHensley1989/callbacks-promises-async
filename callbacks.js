console.log("Callbacks prepared");

const posts = [
    { title: "Post One", body:"this is post one"},
    { title: "Post Two", body:"this is post two"}
];

function getPosts() {
    setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
    })
    }, 1000)
    document.body.innerHTML = output;
}