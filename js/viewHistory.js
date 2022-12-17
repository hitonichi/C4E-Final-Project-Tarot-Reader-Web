export const renderViewHistory = () => {
    return `
    <div>
        <div>View History</div>
        <div>17/12/2022 - La bai 1</div>
        <div>abc</div>
        <div id="viewHistotyClickMe">Click ME<x/div>
    </div>
    `
}

export const handleEvents = () => {
    const viewHistotyClickMe = document.getElementById('viewHistotyClickMe');
    viewHistotyClickMe.addEventListener('click', () => alert('view history clicked'));
}