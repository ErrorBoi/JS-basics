function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 2,
    comments: [{
        author: 'd',
        body: 'e'
    }],
    isLive: true
};

console.log(post);