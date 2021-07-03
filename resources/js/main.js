$(document).ready(function () {

    //active Link

    $('nav ul li a').click(function () {
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    });

    
    // $('nav a img .navbar-brand').click(function () {
      //  $('nav ul li a').removeClass('active');
       // $('nav ul li:first-child a') addClass('active');
   // });
    

    //waypoint for sticky menu

    $('#services').waypoint(function (direction) {

        if (direction == 'down', 'up') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    });



    //mixitup plugin for portfolio section

    let mixer = mixitup('.container');


});
