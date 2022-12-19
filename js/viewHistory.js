import { getHistory } from "./readCard.js";
import data from '../data.json' assert {type: 'json'};

let cards = data.cards;

export const renderViewHistory = () => {
    let readCards = getHistory();
    let content = `
    <div id="history-header-top">
        <h2 id="history-header-title">Recent Cards</h2>
    </div>
    <div class="recent-card-container">
    `;
    if (readCards?.length > 0) readCards.forEach(card => {
        let cardData = cards[card.cardId];
        content += `
        <div class ="recent-card" >
            <div class="recent-card-img">
                <img src=".${cardData.src}.png" alt="Card image">
            </div>
            <div class="recent-card-info">
                <h3>${cardData.name}</h3>
                <p>Date viewed: ${card.lastUpdate}</p>
            </div>
            <div id="viewHistoryClickMe">
                <img src="./assets/icons/icons8-info-68.png" alt="info-icon">
            </div>
        </div>
        `;
    });
    // return `
    // <div id="history-header-top">
    //     <h2 id="history-header-title">Recent Cards</h2>
    // </div>
    // <div class="recent-card-container">
    //     <div class ="recent-card" >
    //         <div class="recent-card-img"><img src="./assets/images/data/wand_1.png" alt="wand_1"></div>
    //         <div class="recent-card-info">
    //         <h3> Ace of Wand </h3>
    //         <p>Date viewed: 19/12/2022</p>
    //         </div>
    //         <div id="viewHistoryClickMe">
    //             <img src="./assets/icons/icons8-info-68.png" alt="info-icon">
    //         </div>
    //     </div>
    //     <div class ="recent-card" >
    //         <div>17/12/2022 - La bai 1</div>
    //         <div>abc</div>
    //         <div id="viewHistoryClickMe">
    //             More info
    //             <img src="./assets/icons/icons8-info-68.png" alt="info-icon">
    //         </div>
    //     </div>
    // </div>
    // `;
    return content + '</div>';
};
