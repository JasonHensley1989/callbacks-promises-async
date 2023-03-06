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

// this function mimics a create fetch from a server but uses promises instead of callback functions
// the code purposely uses a error to show the necessity of a catch but switching it to the reverse performs
// the same function as a resolve.

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject("Error: Something went wrong")
            }
        }, 2000)
    });
}


// createPost({ title: "Post Three", body: "new post body"})
//     .then(getPosts)
//     .catch(err => console.log(err))


// Async - Await
// in order to use async await, the async must be stated at the beginning to use await inside of the function

// async function init() {
//     await createPost({ title: "Post 4", body: "new post body"});

//     getPosts();
// }

// init();


//   Async Await Fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();

// Promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye')
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())


// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))

