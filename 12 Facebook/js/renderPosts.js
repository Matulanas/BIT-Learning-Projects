function renderPosts(data) {

//logika kuri generuoja turini
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += renderSinglePost;
    // susirandame elementa kuriame norime perrasyti turini
    const feedDOM = document.querySelector('main');
    console.log(feedDOM);
    
    // i ta elementa ikeliame HTML kintamojo reiksme 
    feedDOM.innerHTML = HTML;

}

export default renderPosts;