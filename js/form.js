const checkBox = $("#check1");

$("#check1").on("change", function(){
    if(checkBox.prop("checked")){
        $(".addres").closest(".group-choose").show();
    }
    else{
        $(".addres").closest(".group-choose").hide();
    }
});

let hasMistake = false;

function checkInput(){
    hasMistake = false;
    checkAddres();
    checkSize();
    if(! hasMistake){
        let isSer = confirm("Подтвердите отправку формы");
        if(isSer){
            console.log("Форма успешно отправлена");
            deleteProducts();
        } 
    }
}

function checkAddres(){
    const addres = $(".addres");
    if(checkBox.prop("checked")){
        const group = addres.closest(".group-choose");
        const message = group.find(".error-message");
        if(addres.val() == "Выберите адрес доставки"){
            addres.addClass("input-mistake");
            addres.removeClass("input-success");
            message.text("Значение не выбрано");
            hasMistake = true;
        }
        else{
            addres.addClass("input-success");
            addres.removeClass("input-mistake");
            message.text("");
        }
    }
}

function checkSize(){
    $(".size").each(function(i, elem)
    {
        if ($(this).val() == "Размер"){
            $(this).addClass("input-mistake");
            $(this).removeClass("input-success");
            hasMistake = true;
        }
        else{
            $(this).addClass("input-success");
            $(this).removeClass("input-mistake"); 
        }
    });
}

$(".main-form").on("submit", (e)=>{
    e.preventDefault();
    checkInput();
});

function deleteProducts(){
    const cards = $(".product-card");
    cards.remove();
    setPrice();
}