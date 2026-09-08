const boardContainer = document.querySelector('#discussion-board');

// author info stuff
function createAuthorInfo(author){
    const authorInfo = document.createElement('div');
    authorInfo.classList.add('author-info');

    const authorName = document.createElement('p');
    authorName.classList.add('author-name');
    authorName.textContent = author.name;

    const authorUsername = document.createElement('p');
    authorUsername.classList.add('author-username');
    authorUsername.textContent = `@${author.username}`;

    authorInfo.appendChild(authorName);
    authorInfo.appendChild(authorUsername);

    return authorInfo;
}

function createCategories(post){
    const postCategories = document.createElement('div');
    postCategories.classList.add('post-categories');

    for(let i = 0; i < post.categories.length; i++){
        let categories = document.createElement('span');
        categories.classList.add('category');
        categories.textContent = post.categories[i];
        postCategories.appendChild('categories');
    }
    return createCategories;
}

// version one
function versionOne(post){
    let article = document.createElement("article");
    article.classList.add("discussion-post","version-one");
    article.id = `post#{post.id}`;

    const postAuthor = document.createElement('header');
    postAuthor.classList.add('post.author');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = post.author.image;
    profileImage.alt = post.author.name;

    const authorInfo = createAuthorInfo(post.author);

    const postDate = document.createElement('p');
    postDate.classList.add('post-date');
    postDate.textContent = post.postedDate;

    postAuthor.appendChild(profileImage);
    postAuthor.appendChild(authorInfo);
    postAuthor.appendChild(postDate);

    const postTitle = document.createElement('h3');
    postTitle.classList.add('post-title');
    postTitle.textContent = post.title;

    const articleImage = document.createElement('img');
    articleImage.classList.add('article-image');
    articleImage.src = post.articleImage;
    articleImage.alt = post.title;

    const postMessage = document.createElement('p');
    postMessage.classList.add('post-message');
    postMessage.textContent = post.message;

    const postCategories = createCategories(post);
    const postEngagement = createEngagement(post);

    article.appendChild(postAuthor);
    article.appendChild(postTitle);
    article.appendChild(articleImage);
    article.appendChild(postMessage);
    article.appendChild(postCategories);
    article.appendChild(postEngagement);

}

//version two
function versionTwo(post){
    let article = document.createElement("article");
    article.classList.add("discussion-post","version-two");
    article.id = `post#{post.id}`;

    const articleImage = document.createElement('img');
    articleImage.classList.add('article-image');
    articleImage.src = post.articleImage;
    articleImage.alt = post.title;

    const versionTwoOverlay = document.createElement('div');
    versionTwoOverlay.classList.add('version-two-overlay');

    const postTopRow = document.createElement('div');
    postTopRow.classList.add('post-top-row');

    const postCategories = createCategories(post);

    const postAuthor = document.createElement('div');
    postAuthor.classList.add('post-author');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = post.author.image;
    profileImage.alt = post.author.name;

    const authorInfo = createAuthorInfo(post.author);

    postAuthor.appendChild(profileImage);
    postAuthor.appendChild(authorInfo);

    postTopRow.appendChild(postCategories);
    postTopRow.appendChild(postAuthor);

    const glassContent = document.createElement('div');
    glassContent.classList.add('post-glass-content');

    const postTitle = document.createElement('p');
    postTitle.classList.add('post-title');
    postTitle.textContent = post.title;

    const postMessage = document.createElement('p');
    postMessage.classList.add('post-message');
    postMessage.textContent = post.message;

    const bottomRow = document.createElement('div');
    bottomRow.classList.add('post-bottom-row');

    const postDate = document.createElement('post-date');
    postDate.classList.add('post-date');
    postDate.textContent = post.postedDate;

    const postEngagement = createEngagement(post);

    bottomRow.appendChild(postDate);
    bottomRow.appendChild(postEngagement);

    glassContent.appendChild(postTitle);
    glassContent.appendChild(postMessage);
    glassContent.appendChild(bottomRow);

    overlay.appendChild(postTopRow);
    overlay.appendChild(glassContent);

    article.appendChild(articleImage);
    article.appendChild(overlay);

    return article;
}



// version three
function versionThree(post){
    let article = document.createElement("article");
    article.classList.add("discussion-post","version-three");
    article.id = `post#{post.id}`;

    const articleImage = document.createElement('img');
    articleImage.classList.add('article-image');
    articleImage.src = post.articleImage;
    articleImage.alt = post.title;

    const postContent = document.createElement('div');
    postContent.classList.add ('post-content');

    const postAuthor = document.createElement('div');
    postAuthor.classList.add('post-author');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = post.profileImage;
    profileImage.alt = post.title;

    const authorInfo = createAuthorInfo(post.author);

    const postTitle = document.createElement('h3');
    postTitle.classList.add('post-title');
    postTitle.textContent = post.title;

    const postMessage = document.createElement('p');
    postMessage.classList.add('post-message');
    postMessage.textContent = post.message;

    const postCategories = createCategories(post);
    
    const postEngagement = createEngagement(post);


} 



// const boardContainer = document.getElementById('discussion-board');

// for (let i = 0; i < discussionPosts; i++) {
//     const post = document.createElement();

// }