$(document).ready(function(){

    startIndicators();

    $('.slides img:not(:first)').fadeOut();
        
        function startIndicators(){
        loop=setInterval(function(){
            $('.slides img:first').fadeOut("slow",
                function(){
                    $('.slides').append($(this));
                    $('.slides img:first').fadeIn("slow");   
                }
            );
            $('.container > div:last').delay(500).prependTo($('.container'));
        
        },4000);
    }

    $('.slide_container').hover(
        function(){
            clearInterval(loop);
        },
        function(){
            startIndicators();
        }
    );

});

