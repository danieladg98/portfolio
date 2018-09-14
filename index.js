AOS.init({
    duration: 1300,
})


$(document).ready(function () {

    var move = 0;
     var move2 = 0;
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
        move2 = 0;
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

    }




    $("#gaea").hover(function () {
        move = 0;
         move2 = 0;
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


          $(".esconde").addClass('gaea_bg');
         $(".esconde").removeClass('ciclo_bg');
         $(".esconde").removeClass('latada_bg');
         $(".esconde").removeClass('woman_bg');
         $(".esconde").removeClass('desejo_bg');
        $(".esconde").removeClass('murals_bg');

        $("nav a").removeClass('lat_color');
        $("span").removeClass('lat_color');
        $('.num').css('color', 'white');
        $("p").removeClass('lat_color');

    });

    $("#ciclo").hover(function () {
        move = 0;
         move2 = 0;
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
        $("#06").addClass("op");
        $("#03").addClass("op");
        $("#04").addClass("op");
        $("#05").addClass("op");
        $("#02").removeClass("op");

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


       $(".esconde").addClass('ciclo_bg');
         $(".esconde").removeClass('gaea_bg');
         $(".esconde").removeClass('latada_bg');
         $(".esconde").removeClass('woman_bg');
         $(".esconde").removeClass('desejo_bg');
        $(".esconde").removeClass('murals_bg');

        $("nav a").addClass('lat_color');
        $("span").addClass('lat_color');
        $('.num').css('color', '#272725');
        $("p").addClass('lat_color');

    });

    $("#desejo").hover(function () {
        move = 0;
         move2 = 0;
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
        $("#05").addClass("op");
        $("#04").addClass("op");
        $("#01").addClass("op");
        $("#03").removeClass("op");

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

         $(".esconde").addClass('desejo_bg');
         $(".esconde").removeClass('ciclo_bg');
         $(".esconde").removeClass('latada_bg');
         $(".esconde").removeClass('woman_bg');
         $(".esconde").removeClass('gaea_bg');
        $(".esconde").removeClass('murals_bg');

        $("nav a").removeClass('lat_color');
        $("span").removeClass('lat_color');
        $('.num').css('color', 'white');
        $("p").removeClass('lat_color');
    });

    $("#latada").hover(function () {
        move = 0;
         move2 = 0;
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
        $("#03").addClass("op");
        $("#05").removeClass("op");

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

        
          $(".esconde").addClass('latada_bg');
         $(".esconde").removeClass('ciclo_bg');
         $(".esconde").removeClass('gaea_bg');
         $(".esconde").removeClass('woman_bg');
         $(".esconde").removeClass('desejo_bg');
        $(".esconde").removeClass('murals_bg');
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

        $("#02").addClass("op");
        $("#04").addClass("op");
        $("#03").addClass("op");
        $("#01").addClass("op");
        $("#05").addClass("op");
        $("#06").removeClass("op");

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

        
        
          $(".esconde").addClass('woman_bg');
         $(".esconde").removeClass('ciclo_bg');
         $(".esconde").removeClass('latada_bg');
         $(".esconde").removeClass('gaea_bg');
         $(".esconde").removeClass('desejo_bg');
        $(".esconde").removeClass('murals_bg');
        

        $("nav a").addClass('lat_color');
        $("span").addClass('lat_color');
        $('.num').css('color', '#272725');
        $("p").addClass('lat_color');
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

        
          $(".esconde").addClass('murals_bg');
         $(".esconde").removeClass('ciclo_bg');
         $(".esconde").removeClass('latada_bg');
         $(".esconde").removeClass('woman_bg');
         $(".esconde").removeClass('desejo_bg');
        $(".esconde").removeClass('gaea_bg');

     

        $("nav a").removeClass('lat_color');
        $("span").removeClass('lat_color');
        $('.num').css('color', 'white');
        $("p").removeClass('lat_color');
    });


});
