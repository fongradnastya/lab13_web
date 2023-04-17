$('.popup').hide();
$('.user').hide();
showUser();

$('.popup__close').click(function(){
    $('.popup').hide();
})

$(".open-popup").click(function(){
    $('.popup').show();
})

function checkForm(){
    hasMistake = false;
    checkFormField($(".name"));
    checkFormField($(".email"));
    checkFormField($(".password"));
    if(! hasMistake){
        console.log("Форма успешно отправлена");
        let name = $(".name").val();
        let email = $(".email").val();
        let password = $(".password").val();
        setAllCookies(name, email, password);
        console.log(document.cookie);
        console.log(getCookie("user"));
        console.log(getCookie("email"));
        $('.popup').hide();
        showUser();
    }
}

function setAllCookies(name, email, password){
    let week = 3600 * 24 * 7;
    setCookie("user", name, {'max-age': week});
    setCookie("email", email, {'max-age': week});
    setCookie("password", password, {'max-age': week});
}

function setCookie(name, value, options = {}){
    options = {
        path: '/',
    };
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}

function deleteCookie(name){
    setCookie(name, "", {
      'max-age': -1
    })
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function checkFormField(input){
    const inputlValue = input.val();
    if(inputlValue === ''){
        input.addClass("input-mistake");
        input.removeClass("input-success");
        hasMistake = true;
    }
    else{
        input.removeClass("input-mistake");
        input.addClass("input-success");
    }
}

$(".popup__form").on("submit", (e)=>{
    console.log(1);
    e.preventDefault();
    checkForm();
});

function showUser(){
    let username = getCookie("user");
    if(username){
        $(".user__name").text(username);
        $(".user").show();
        $(".open-popup").hide();
    }
}

$(".exit").click(function(){
    deleteCookie("user");
    $(".user").hide();
    $(".open-popup").show();
})