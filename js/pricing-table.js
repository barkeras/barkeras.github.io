$(window).load(function () {

    calculateMaxCardHeight('package-price');
    calculateMaxCardHeight('a-la-carte-price');
    calculateMaxCardHeight('non-dns-price');
});

function calculateMaxCardHeight(elementName) {
    let priceCards = document.getElementsByName(elementName);
    let maxCardHeight = 50;

    priceCards.forEach(function (card) {
        maxCardHeight = (card.clientHeight > maxCardHeight) ? card.clientHeight : maxCardHeight;
    });

    priceCards.forEach(function (card) {
        card.style.height = maxCardHeight + 'px';
        card.clientHeight = maxCardHeight;
    });
}