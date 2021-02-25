function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`

        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment)
        }

        toString() {
            let post = super.toString();
            let rating = `Rating: ${this.likes - this.dislikes}`;
            let commenter = this.comments > 0 ? `Comments:\n${this.comments.map(com => ` * ${com}`).join('\n')}` : ``;

            return[post,rating,commenter].join('\n').trim()
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost}

}

