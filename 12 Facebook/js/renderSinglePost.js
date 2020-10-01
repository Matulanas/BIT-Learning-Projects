function renderSinglePost(data){
    console.log(data);
    return `<div class="post">
    <header>
        ${renderHeader()}
    </header>
    <div>
        text + images
    </div>
    <footer>
        like + comment
    </footer>
    </div>`;
}


export default renderSinglePost;