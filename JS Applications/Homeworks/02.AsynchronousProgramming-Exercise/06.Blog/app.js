function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    document.getElementById('btnViewPost').addEventListener('click',displayPost)
}

attachEvents();

async function getPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const response = await fetch(url);
    const date = await response.json();

    const select = document.getElementById('posts');

    Object.values(date).map(creatOption).forEach(o => select.appendChild(o))
}

function creatOption(post) {
    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;

    return result;
}

function displayPost() {
    let postId = document.getElementById('posts').value;
    getCommentsByPostId(postId)
}

async function getCommentsByPostId(postId) {
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts/' + postId;
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

   const [postResponse,commentsResponse]=await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ]);

    const postDate = await postResponse.json();

    document.getElementById('post-title').textContent = postDate.title;
    document.getElementById('post-body').textContent = postDate.body;

    const commentsDate = await commentsResponse.json();
    let filter = Object.values(commentsDate).filter(c => c.postId === postId);

    const commentsUl = document.getElementById('post-comments');

    filter.map(creatComment).forEach(c => commentsUl.appendChild(c));
}

function creatComment(comment) {
    const result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;

    return result;
}