AOS.init({
    duration: 1300,
})

$(document).ready(function () {

    $("#gaea").addClass("selected");
    $("#gaea").removeClass("op");
    $("#desejo").removeClass("selected");
    $("#latada").removeClass("selected");
    $("#womanpower").removeClass("selected");
    $("#murals").removeClass("selected");
    $("#desejo").addClass("op");
    $("#latada").addClass("op");
    $("#womanpower").addClass("op");
    $("#murals").addClass("op");

    $("#02").addClass("op");
    $("#03").addClass("op");
    $("#04").addClass("op");
    $("#05").addClass("op");

    $("#grad").addClass("selected");
    $("#grad").removeClass("op");
    $("#edit").addClass("selected");
    $("#edit").removeClass("op");
    $("#webd").addClass("selected");
    $("#webd").removeClass("op");
    $("#webdev").addClass("selected");
    $("#webdev").removeClass("op");
    $("#av").addClass("op");
    $("#brand").addClass("op");
    $("#av").removeClass("selected");
    $("#brand").removeClass("selected");


    $("body").css('background', 'url("Gaea/videocapa.gif") no-repeat center center fixed');

    $("body").css('-webkit-background-size', 'cover');

    $('#follow').addClass('disp');


    $("#gaea").hover(function () {
        $(this).addClass("selected");
        $(this).removeClass("op");
        $("#desejo").removeClass("selected");
        $("#latada").removeClass("selected");
        $("#womanpower").removeClass("selected");
        $("#murals").removeClass("selected");
        $("#desejo").addClass("op");
        $("#latada").addClass("op");
        $("#womanpower").addClass("op");
        $("#murals").addClass("op");

        $("#02").addClass("op");
        $("#03").addClass("op");
        $("#04").addClass("op");
        $("#05").addClass("op");
        $("#01").removeClass("op");

        $("#grad").addClass("selected");
        $("#grad").removeClass("op");
        $("#edit").addClass("selected");
        $("#edit").removeClass("op");
        $("#webd").addClass("selected");
        $("#webd").removeClass("op");
        $("#webdev").addClass("selected");
        $("#webdev").removeClass("op");
        $("#av").addClass("op");
        $("#brand").addClass("op");
        $("#av").removeClass("selected");
        $("#brand").removeClass("selected");


        $("body").css('background', 'url("Gaea/videocapa.gif") no-repeat center center fixed');

        $("body").css('-webkit-background-size', 'cover');

        $('#follow').addClass('disp');

    });

    $("#desejo").hover(function () {
        $(this).addClass("selected");
        $(this).removeClass("op");
        $("#gaea").removeClass("selected");
        $("#latada").removeClass("selected");
        $("#womanpower").removeClass("selected");
        $("#murals").removeClass("selected");
        $("#gaea").addClass("op");
        $("#latada").addClass("op");
        $("#womanpower").addClass("op");
        $("#murals").addClass("op");

        $("#02").addClass("op");
        $("#03").addClass("op");
        $("#04").addClass("op");
        $("#01").addClass("op");
        $("#05").removeClass("op");

        $("#av").addClass("selected");
        $("#av").removeClass("op");
        $("#grad").addClass("op");
        $("#brand").addClass("op");
        $("#edit").addClass("op");
        $("#webd").addClass("op");
        $("#webdev").addClass("op");
        $("#grad").removeClass("selected");
        $("#brand").removeClass("selected");
        $("#edit").removeClass("selected");
        $("#webd").removeClass("selected");
        $("#webdev").removeClass("selected");

        $("body").css('background', 'url("Desejo/e.gif") no-repeat center center fixed');

        $("body").css('-webkit-background-size', 'cover');

        $('#follow').addClass('disp');
    });


    $("#murals").hover(function () {
        $(this).addClass("selected");
        $(this).removeClass("op");
        $("#gaea").removeClass("selected");
        $("#latada").removeClass("selected");
        $("#womanpower").removeClass("selected");
        $("#desejo").removeClass("selected");
        $("#gaea").addClass("op");
        $("#latada").addClass("op");
        $("#womanpower").addClass("op");
        $("#desejo").addClass("op");

        $("#02").addClass("op");
        $("#03").addClass("op");
        $("#01").addClass("op");
        $("#05").addClass("op");
        $("#04").removeClass("op");

        $("#grad").addClass("selected");
        $("#grad").removeClass("op");
        $("#av").addClass("op");
        $("#brand").addClass("op");
        $("#edit").addClass("op");
        $("#webd").addClass("op");
        $("#webdev").addClass("op");
        $("#av").removeClass("selected");
        $("#brand").removeClass("selected");
        $("#edit").removeClass("selected");
        $("#webd").removeClass("selected");
        $("#webdev").removeClass("selected");

        $("body").css('background', 'black');

        //image follows mouse         
        $(document).mousemove(function (e) {
            var x = e.pageX - 80;
            var y = e.pageY - 80;
            $('#follow').removeClass('disp');
            $('#follow').css('margin-top', y);
            $('#follow').css('margin-left', x);
        });
    });




});
