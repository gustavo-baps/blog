function extrairIdUrl(){
    const stringQuery = window.location.search;
    const paramsUrl = new URLSearchParams(stringQuery);
    return paramsUrl.get('id');
}
function fetchUnicoPost(index){
    const url = `https://api-rest-post-diegocandido.herokuapp.com/postagem/${index}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        mostrarUmPost(data);
    })
    .catch(error => console.error('erro ao buscar post', error));
}
function mostrarUmPost(post){
    const containerPost = document.getElementById('postUnico');
    const thumbImageSrc = post.thumbImage.startsWith('/') ? `https://api-rest-post-diegocandido.herokuapp.com${post.thumbImage}` : post.thumbImage;
    const postHTML = `
    <div id ="post">
    <img id="thumbImage" src="${thumbImageSrc}" alt="${post.thumbImageAltText}">
        <div id="cimaPost">
            <h2>${post.title}</h2>
            <p>${post.description}</p>
            <p>Por ${post.profileName}, ${post.postDate}</p>
        </div>
    </div>`;
    containerPost.innerHTML = postHTML;
}
const index = extrairIdUrl();
fetchUnicoPost(index);