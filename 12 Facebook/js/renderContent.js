import renderContentText from './renderContentText.js';
import renderContentGallery from './renderContentGallery.js';

function renderContent(data) {


    if(!data){
        console.error('ERROR: negautas posto turinį nustatantis objektas!')
        return '';
    }


    let photosHTML = '';
    if(data.photos){
        photosHTML = renderContentGallery(data.photos);
    }

    let textHTML = '';
    if(data.text){
        textHTML = renderContentText(data.text);
    }

    return `<div>
                ${textHTML}
                ${photosHTML}
            </div>`;
}

export default renderContent;