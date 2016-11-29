$(document).ready(function(){
    // Parallax
    $('.parallax').parallax();

    $(document).ready(function(){
      $('.carousel').carousel();
    });

    $(function(){
        
        $personalDetails = $('.personalDetails');
        $jobs = $('.jobs');
        $education = $('.education');
        
        var options = [

        {selector: '.personalDetails', offset: 200, callback: '$personalDetails.addClass("bounceInRight animated").css("visibility", "visible")'},   
        {selector: '.education', offset: 200, callback: '$education.addClass("bounceInLeft animated").css("visibility", "visible")'},
        {selector: '.jobs', offset: 200, callback: '$jobs.addClass("bounceInRight animated").css("visibility", "visible")'}   
    ];

    Materialize.scrollFire(options);

    });
    
    $(function() {

        $('a[href*="#"]:not([href="#"])').click(function() {

            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
            }
            }
        });
    });
    
    $(function(){

        $("#nav-mobile a").click(function(){
        console.log("hello");
        $("#nav-mobile").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        });
    });

});



