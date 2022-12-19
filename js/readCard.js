import data from '../data.json' assert {type: 'json'};
import {modalWrapper, modalContent} from './app.js';

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

let dialogs = [
    'Welcome to the Daily Reading section. We will let you ask yourself some questions during the reading. Please press the \'Next step\' to go to the next section.',
    'First, think about what you want to know most today...',
    '... and what is on your mind recently...',
    '... you may think of some people, some events...',
    '... let\'s confirm your thoughts and receive the reading.'
]

let readCardContent = `
<div id="readCard-content-wrapper">
    <div id="readCard-dialog">${dialogs[0]}</div>
    <div class="light"></div>
    <button id="readCard-next-btn">Next Step</button>
</div>
`;

let readCardResult = `
<div id="readCard-result-wrapper">
    <div id="readCard-img-holder">
        <img src="">
    </div>
    <div id="readCard-card-content">
        <div id="readCard-card-name"></div>
        <div id="readCard-card-key"></div>
        <div id="readCard-card-detail"></div>
        <div id="readCard-receive-date"></div>
    </div>
</div>
`;

const readCardRenderBody = (content) => {
    const readCardModalContent = document.getElementById('readCard-modal-content');
    readCardModalContent.innerHTML = '';
    readCardModalContent.innerHTML += content;
}

export const renderReadingCardContent = () => {
    const header = `
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
    console.log(modalWrapper);
    // modalWrapper.classList.remove('show');
    modalWrapper.classList.add('readCard-modal-wrapper-show');
    
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

        let step = 1;
        let readNxtBtn = document.getElementById('readCard-next-btn');
        readNxtBtn.addEventListener('click', () => {
            if (step < dialogs.length) {
                let dialogBox = document.getElementById('readCard-dialog');
                dialogBox.innerHTML = dialogs[step];
                readNxtBtn.style.display = 'none';
                setTimeout(() => {
                    readNxtBtn.style.display = 'block';
                }, '1000')
                step++;
            }
            else {
                let id = Math.floor(Math.random() * 78);
                let readDate = new Date();
                modalContent.innerHTML = `
                <div id="readCard-result-wrapper">
                    <div id="readCard-img-holder">
                        <img src=".${cards[id].src}.png">
                    </div>
                    <div id="readCard-card-content">
                        <div id="readCard-card-title">
                            <div id="readCard-card-name">- ${cards[id].name} -</div>
                            <div id="readCard-card-key">${cards[id].keyword}</div>
                        </div>
                        <div id="readCard-card-detail">${cards[id].detail}</div>
                        <div id="readCard-receive-date">${readDate.toDateString()}</div>
                    </div>
                </div>
                `;
            }
        })
    })
}
