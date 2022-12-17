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

const readCardRenderBody = (content) => {
    const readCardModalContent = document.getElementById('readCard-modal-content');
    readCardModalContent.innerHTML = '';
    readCardModalContent.innerHTML += content;
}

export const renderReadingCardContent = () => {
    const header = `
    <div id="readCard-modal-top">
        <h2 id="readCard-modal-title">Get your Daily Reading</h2>
        <img id="readCard-close-modal" style="width: 60px; height: 60px; cursor: pointer;"
        src="./assets/icons/icons8-close-91.png" alt="close-icon" />
    </div>
    <div id="readCard-modal-navbar">
        <div id="readCard-rule" class="readCard-nav-tag readCard-tag-active">Rules</div>
        <div id="readCard-read" class="readCard-nav-tag">Read a Card</div>
    </div>
    `;
    return `
        ${header}
        <div id="readCard-modal-content">
           ${ruleContent}
        </div>
    `;
}

export const handleEvents = () => {
    const ruleNavBtn = document.getElementById('readCard-rule');
    const readNavBtn = document.getElementById('readCard-read');

    ruleNavBtn.addEventListener('click', () => {
        readNavBtn.classList.remove('readCard-tag-active');
        ruleNavBtn.classList.add('readCard-tag-active');
        readCardRenderBody(ruleContent);
    })
    readNavBtn.addEventListener('click', () => {
        ruleNavBtn.classList.remove('readCard-tag-active');
        readNavBtn.classList.add('readCard-tag-active');
        readCardRenderBody(readCardContent);
    })
}
