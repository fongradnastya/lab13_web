$(".trash").on("click", function (event){
    const card = $(event.target).closest(".card");
    card.remove();
    setPrice();
});

function checkIsEmpty(){
    if($(".counter").length == 0){
        $(".empty").show();
        $(".common-price").hide();
        $(".warning").show();
        disableForm();
    }
}

function disableForm(){
    $("#check1").prop("checked", false);
    $(".addres").hide();
    $(".main-form").find("input").each(function(){
        $(this).attr("disabled", true);
    });
    $(".main-form").find("button").attr("disabled", true);
}

function setPrice(){
    commonPrice = 0; 
    $(".counter").each(function(i, elem)
    {
        let quantity = elem.value;
        const card = $(this).closest(".card");
        const itemPriceTag = card.find(".card-price");
        let itemPrice = Number(itemPriceTag.text().trim().slice(0, -3));
        commonPrice += quantity * itemPrice;
    })
    $(".price").text(commonPrice + " р.");
    $(".header__prise").text(commonPrice + " р.");
    checkIsEmpty();
}

$(".counter").each(function(){
    $(this).on('input', function() {setPrice()});
});

setPrice();