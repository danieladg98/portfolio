AOS.init({
    duration: 1300,
})

$(document).ready(function () {


$(document).mousemove(function (e) {
    var x = e.pageX + 10;
    var y = e.pageY + 10;
    $('#loader').css('margin-top', y);
    $('#loader').css('margin-left', x);
});


setTimeout(afterload, 1500);

function afterload() {

    $('#loader').css('display', 'none');

    /*fadeout*/
    $('.esconde').removeClass('fade-out');
}


function changeColor() {
    var dt = new Date();
    var time = dt.getSeconds();
    if (time % 2 == 1) {
        $("#changecolor").css('color', 'black');
        $("#changecolor2").css('color', 'white');
    } else {
        $("#changecolor").css('color', 'white');
        $("#changecolor2").css('color', 'black');
    }
}

setInterval(changeColor, 1000);


$("#random").hover(function () {
    var r = Math.floor((Math.random() * 10) + 1);
    console.log(r);

    if (r < 2) {
        $("#random").attr("href", "gaea.html");
    } else if (r == 3 || r == 4) {
        $("#random").attr("href", "latada.html");
    } else if (r == 5 || r == 6) {
        $("#random").attr("href", "ciclo.html");
    } else if (r == 4 || r == 8) {
        $("#random").attr("href", "murals.html");
    } else if (r == 9 || r == 10) {
        $("#random").attr("href", "desejo.html");
    } 
});

$(document).mousemove(function (e) {
    var x = e.pageX + 20;
    var y = e.pageY - 60;
    $('#follow3').css('margin-top', y);
    $('#follow3').css('margin-left', x);
});

});
