import data from '../data.json' assert {type: 'json'};

let cards = data.cards;
let ruleContent = `
<div id="readCard-content-wrapper">
    <h3>What is a Daily Reading?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, non iure! Sequi molestiae earum, dolorem nobis totam, magnam quo dolores impedit mollitia quis dolor sint corrupti similique odio libero accusantium.</p>
    <br>
    <h3>What should you expect for this type of reading?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, non iure! Sequi molestiae earum, dolorem nobis totam, magnam quo dolores impedit mollitia quis dolor sint corrupti similique odio libero accusantium.</p>
    <br>
    <h3>How frequent should I get my reading?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, non iure! Sequi molestiae earum, dolorem nobis totam, magnam quo dolores impedit mollitia quis dolor sint corrupti similique odio libero accusantium.</p>
    <br>
    <h3>What is a Daily Reading?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, non iure! Sequi molestiae earum, dolorem nobis totam, magnam quo dolores impedit mollitia quis dolor sint corrupti similique odio libero accusantium.</p>
    <br>
    <h3>What should you expect for this type of reading?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, non iure! Sequi molestiae earum, dolorem nobis totam, magnam quo dolores impedit mollitia quis dolor sint corrupti similique odio libero accusantium.</p>
    <br>
    <h3>How frequent should I get my reading?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, non iure! Sequi molestiae earum, dolorem nobis totam, magnam quo dolores impedit mollitia quis dolor sint corrupti similique odio libero accusantium.</p>
    <br>
</div>
`;
let readCardContent = `
<div id="readCard-content-wrapper">
    <div id="readCard-dialog">.</div>
    <div class="light"></div>
    <button id="readCard-next-btn">Next Step</button>
</div>
`;




const readCardModalWrapper = document.getElementById('readCard-modal-wrapper');
const readCardCloseModalBtn = document.getElementById('readCard-close-modal');
const readCardModalContent = document.getElementById('readCard-modal-content');

function readCardCloseModal() {
    modalOverlay.classList.remove('show');
    readCardModalWrapper.classList.remove('readCard-modal-wrapper-show');
}

// Main code

readCardCloseModalBtn.addEventListener('click', readCardCloseModal);


const readCardRenderContent = () => {
    return () => {
        modalOverlay.classList.add('show');
        readCardModalWrapper.classList.add('readCard-modal-wrapper-show');
        
        // replace console.log with render content logic
        console.log(cards);
        
        const ruleNavBtn = document.getElementById('readCard-rule');
        const readNavBtn = document.getElementById('readCard-read');
        console.log(ruleNavBtn);
        console.log(readNavBtn);

        ruleNavBtn.addEventListener('click', () => {
            readNavBtn.classList.remove('readCard-tag-active');
            ruleNavBtn.classList.add('readCard-tag-active');
            readCardRenderBody(ruleContent);
        })
        readNavBtn.addEventListener('click', () => {
            ruleNavBtn.classList.remove('readCard-tag-active');
            readNavBtn.classList.add('readCard-tag-active');
            readCardModalContent.innerHTML = '';
            readCardRenderBody(readCardContent);
        })
    }
}

const readCardRenderBody = (ruleContent) => {
    readCardModalContent.innerHTML = '';
    readCardModalContent.innerHTML += ruleContent;
}

const readCardBtn = document.getElementById('readNew');

readCardBtn.addEventListener('click', readCardRenderContent());