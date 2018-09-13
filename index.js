AOS.init({
    duration: 1300,
})


$(document).ready(function () {

    var move = 0;
    var i = 10;

    $(document).mousemove(function (e) {
        var x = e.pageX + 10;
        var y = e.pageY + 10;
        $('#loader').css('margin-top', y);
        $('#loader').css('margin-left', x);
    });


    setTimeout(afterload, 2500);

    function afterload() {

        $('#loader').css('display', 'none');

        /*fadeout*/
        $('.esconde').removeClass('fade-out');


        move = 0;
        i = 10;

        $("#gaea").addClass("selected");
        $("#gaea").removeClass("op");
        $("#desejo").removeClass("selected");
        $("#ciclo").removeClass("selected");
        $("#latada").removeClass("selected");
        $("#womanpower").removeClass("selected");
        $("#live").removeClass("selected");
        $("#desejo").addClass("op");
        $("#latada").addClass("op");
        $("#womanpower").addClass("op");
        $("#live").addClass("op");
        $("#ciclo").addClass("op");

        $("#06").addClass("op");
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

        $('#follow').css('display', 'none');
        $('#follow2').css('display', 'none');
    }




    $("#gaea").hover(function () {
        move = 0;
        i = 10;

        $(this).addClass("selected");
        $(this).removeClass("op");
        $("#desejo").removeClass("selected");
        $("#ciclo").removeClass("selected");
        $("#latada").removeClass("selected");
        $("#womanpower").removeClass("selected");
        $("#live").removeClass("selected");
        $("#desejo").addClass("op");
        $("#latada").addClass("op");
        $("#womanpower").addClass("op");
        $("#live").addClass("op");
        $("#ciclo").addClass("op");

        $("#02").addClass("op");
        $("#06").addClass("op");
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

        $('#follow').css('display', 'none');
        $('#follow2').css('display', 'none');

        $("nav a").removeClass('lat_color');
        $("span").removeClass('lat_color');
        $('.num').css('color', 'white');
        $("p").removeClass('lat_color');

    });

    $("#ciclo").hover(function () {
        move = 0;
        i = 10;

        $(this).addClass("selected");
        $(this).removeClass("op");
        $("#desejo").removeClass("selected");
        $("#gaea").removeClass("selected");
        $("#latada").removeClass("selected");
        $("#womanpower").removeClass("selected");
        $("#live").removeClass("selected");
        $("#desejo").addClass("op");
        $("#latada").addClass("op");
        $("#womanpower").addClass("op");
        $("#live").addClass("op");
        $("#gaea").addClass("op");

        $("#01").addClass("op");
        $("#02").addClass("op");
        $("#03").addClass("op");
        $("#04").addClass("op");
        $("#05").addClass("op");
        $("#06").removeClass("op");

        $("#grad").addClass("selected");
        $("#grad").removeClass("op");
        $("#brand").addClass("selected");
        $("#brand").removeClass("op");
        $("#webd").removeClass("selected");
        $("#webd").addClass("op");
        $("#webdev").removeClass("selected");
        $("#webdev").addClass("op");
        $("#av").addClass("op");
        $("#edit").addClass("op");
        $("#av").removeClass("selected");
        $("#edit").removeClass("selected");


        $("body").css('background', 'url("ciclo/Divulgacao.gif") no-repeat center center fixed');

        $("body").css('-webkit-background-size', 'cover');

        $('#follow').css('display', 'none');
        $('#follow2').css('display', 'none');

        $("nav a").addClass('lat_color');
        $("span").addClass('lat_color');
        $('.num').css('color', '#272725');
        $("p").addClass('lat_color');

    });

    $("#desejo").hover(function () {
        move = 0;
        i = 10;

        $(this).addClass("selected");
        $(this).removeClass("op");
        $("#gaea").removeClass("selected");
        $("#ciclo").removeClass("selected");
        $("#latada").removeClass("selected");
        $("#womanpower").removeClass("selected");
        $("#live").removeClass("selected");
        $("#gaea").addClass("op");
        $("#latada").addClass("op");
        $("#womanpower").addClass("op");
        $("#live").addClass("op");
        $("#ciclo").addClass("op");

        $("#02").addClass("op");
        $("#06").addClass("op");
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

        $('#follow').css('display', 'none');
        $('#follow2').css('display', 'none');

        $("nav a").removeClass('lat_color');
        $("span").removeClass('lat_color');
        $('.num').css('color', 'white');
        $("p").removeClass('lat_color');
    });

    $("#latada").hover(function () {
        move = 0;
        i = 10;

        $(this).addClass("selected");
        $(this).removeClass("op");
        $("#ciclo").removeClass("selected");
        $("#gaea").removeClass("selected");
        $("#live").removeClass("selected");
        $("#womanpower").removeClass("selected");
        $("#desejo").removeClass("selected");
        $("#gaea").addClass("op");
        $("#live").addClass("op");
        $("#womanpower").addClass("op");
        $("#desejo").addClass("op");
        $("#ciclo").addClass("op");

        $("#04").addClass("op");
        $("#06").addClass("op");
        $("#02").addClass("op");
        $("#01").addClass("op");
        $("#05").addClass("op");
        $("#03").removeClass("op");

        $("#grad").addClass("selected");
        $("#grad").removeClass("op");
        $("#brand").addClass("selected");
        $("#brand").removeClass("op");
        $("#av").addClass("op");
        $("#edit").addClass("op");
        $("#webd").addClass("op");
        $("#webdev").addClass("op");
        $("#av").removeClass("selected");
        $("#edit").removeClass("selected");
        $("#webd").removeClass("selected");
        $("#webdev").removeClass("selected");

        $("body").css('background', 'url("Latada/moullinex.gif") no-repeat center center fixed');

        $("body").css('-webkit-background-size', 'cover');

        $('#follow').css('display', 'none');
        $('#follow2').css('display', 'none');

        $("nav a").addClass('lat_color');
        $("span").addClass('lat_color');
        $('.num').css('color', '#272725');
        $("p").addClass('lat_color');

    });


    $("#womanpower").hover(function () {
        $(this).addClass("selected");
        $(this).removeClass("op");
        $("#ciclo").removeClass("selected");
        $("#gaea").removeClass("selected");
        $("#latada").removeClass("selected");
        $("#live").removeClass("selected");
        $("#desejo").removeClass("selected");
        $("#gaea").addClass("op");
        $("#latada").addClass("op");
        $("#live").addClass("op");
        $("#desejo").addClass("op");
        $("#ciclo").addClass("op");

        $("#06").addClass("op");
        $("#04").addClass("op");
        $("#03").addClass("op");
        $("#01").addClass("op");
        $("#05").addClass("op");
        $("#02").removeClass("op");

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

        $('#follow').css('display', 'none');
        $('#follow2').css('display', 'flex');


        //image follows mouse         
        $(document).mousemove(function (e) {
            move++;
            var x = e.pageX - 300;
            var y = e.pageY - 300;
            $('#follow').addClass('disp');
            $('#follow2').removeClass('disp');
            $('#follow2').css('margin-top', y);
            $('#follow2').css('margin-left', x);

            if (move % 20 == 0) {
                var path = 'womanPower/main/',
                    imgs = ['03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '010.jpg', '011.jpg', '012.jpg', '1.jpg', '012.jpg', '011.jpg', '010.jpg', '09.jpg', '08.jpg', '07.jpg', '06.jpg', '05.jpg', '04.jpg', '03.jpg'];

                i++;
                if (i <= 0) {
                    i = 0;
                } else if (i >= 21) {
                    i = 0;
                }

                $('#follow2').attr("src", path + imgs[i]);
            }



        });

        $("nav a").removeClass('lat_color');
        $("span").removeClass('lat_color');
        $('.num').css('color', 'white');
        $("p").removeClass('lat_color');
    });


    $("#live").hover(function () {

        $(this).addClass("selected");
        $(this).removeClass("op");
        $("#ciclo").removeClass("selected");
        $("#gaea").removeClass("selected");
        $("#latada").removeClass("selected");
        $("#womanpower").removeClass("selected");
        $("#desejo").removeClass("selected");
        $("#gaea").addClass("op");
        $("#latada").addClass("op");
        $("#womanpower").addClass("op");
        $("#desejo").addClass("op");
        $("#ciclo").addClass("op");

        $("#06").addClass("op");
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

        $('#follow2').css('display', 'none');
        $('#follow').css('display', 'flex');

        //image follows mouse         
        $(document).mousemove(function (e) {
            move++;
            var x = e.pageX - 230;
            var y = e.pageY - 230;
            $('#follow').removeClass('disp');
            $('#follow').css('margin-top', y);
            $('#follow').css('margin-left', x);

            if (move % 20 == 0) {
                var path = 'murals/main/',
                    imgs = ['21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg', '33.jpg', '34.jpg'],
                    i = Math.floor(Math.random() * imgs.length);
                $('#follow').attr("src", path + imgs[i]);
            }
        });

        $("nav a").removeClass('lat_color');
        $("span").removeClass('lat_color');
        $('.num').css('color', 'white');
        $("p").removeClass('lat_color');
    });


});
