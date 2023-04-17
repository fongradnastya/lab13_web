// Работа с корзиной
$(".header__prise").text(0 + " р.");
let commonPrice = 0;


$(".popular__link").on("click", function (event) {
    const card = $(event.target).closest('.popular__card');
    const productPrice = card.find(".popular__price");
    let price = Number(productPrice.text().trim().slice(0, -3));
    commonPrice += price;
    $(".header__prise").text(commonPrice + " р.");
})
