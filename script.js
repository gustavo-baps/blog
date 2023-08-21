function fetchPost(){
    const url = 'https://api-rest-post-diegocandido.herokuapp.com/postagens/';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        mostrarPosts(data);
    })
    .catch(error => console.error('Erro ao buscar postagem', error));
}
function mostrarPosts(posts){
    const containerPosts = document.getElementById('posts');
    posts.forEach((post, index) => {
        const thumbImageSrc = post.thumbImage.startsWith('/') ? `https://api-rest-post-diegocandido.herokuapp.com${post.thumbImage}` : post.thumbImage;
        const profileThumbImageSrc = post.profileThumbImage.startsWith('/') ? `https://api-rest-post-diegocandido.herokuapp.com${post.profileThumbImage}` : post.profileThumbImage;
        const postHTML = `
        <div id ="post" onclick="mostrarUmPost(${index})">
        <img id="thumbImage" src="${thumbImageSrc}" alt="${post.thumbImageAltText}">
            <div id="cimaPost">
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <p>Por ${post.profileName}, ${post.postDate}</p>
            </div>
        </div>`;
        containerPosts.innerHTML += postHTML;
    });
}
function mostrarUmPost(index) {
    window.location.href = `index2.html?id=${index}`;
}
fetchPost();