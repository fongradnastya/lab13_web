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
    checkTextInput($(".email"));
    checkTextInput($(".phone"));
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

function checkTextInput(input){
    const group = input.closest(".group");
    const message = group.find(".error-message");
    const icon = group.find(".bi");
    const inputlValue = input.val().trim();
    if(inputlValue === ''){
        input.addClass("input-mistake");
        input.removeClass("input-success");
        hasMistake = true;
        message.text("Поле не заполнено");
        icon.addClass("bi-x-circle-fill");
        icon.removeClass("bi-check-circle-fill")
    }
    else{
        input.removeClass("input-mistake");
        input.addClass("input-success");
        message.text("");
        icon.removeClass("bi-x-circle-fill");
        icon.addClass("bi-check-circle-fill");
    }
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