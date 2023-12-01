var groupCard = ["🦄", "🍧", "🌈", "👽", "👾", "🤖", "👹", "👺"];

let setCards = groupCard.concat(groupCard);

table.innerHTML = "";

setCard.forEach(function(element) {
    let card = document.createElement("div");

    card.innerHTML = 
    "<div class='card'>" +
    "<div class='card_content'>" +
    element +
    "</div>" + 
    "</div>";

    table.appendChild(card);
});