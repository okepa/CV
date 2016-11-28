$(document).ready(function(){
    // Parallax
    $('.parallax').parallax();
    
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

//     $boxTwo = $('.box');

// $('.toggleButton').on('click', function() { 
//   if($(this).html() === 'Play') 
//   {
//     $(this).html('Pause');
//     $boxTwo.addClass('horizTranslate');
//   } else {
//     $(this).html('Play');
//     var computedStyle = $boxTwo.css('margin-left');
//     $boxTwo.removeClass('horizTranslate');
//     $boxTwo.css('margin-left', computedStyle);
//   }  
// });

//   ];
//   Materialize.scrollFire(options);

//     if($(this).html() === 'Play') 
//     {
//         $(this).html('Pause');
//         $boxTwo.addClass('horizTranslate');
//     } else {
//         $(this).html('Play');
//         var computedStyle = $boxTwo.css('margin-left');
//         $boxTwo.removeClass('horizTranslate');
//         $boxTwo.css('margin-left', computedStyle);
//     }      
// });