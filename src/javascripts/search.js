import { getPostTeasers } from "./search-data";

let content

document.addEventListener('DOMContentLoaded', () => {
    getPostTeasers().then((data) => {
        content = data;

        createCards(content)
    })
})

function createCards(content) {
    content.forEach((content) => {
        
    });
}