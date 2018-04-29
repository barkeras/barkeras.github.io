$(window).load(function () {

    let serviceCards = document.getElementsByName('service-card');
    let maxCardHeight = 50;

    serviceCards.forEach(function (card) {
        maxCardHeight = (card.clientHeight > maxCardHeight) ? card.clientHeight : maxCardHeight;
    });

    serviceCards.forEach(function (card) {
        card.style.height = maxCardHeight + 'px';
        card.clientHeight = maxCardHeight;
    });
})