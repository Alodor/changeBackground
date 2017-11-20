$(document).ready(function() {
    
    var index = 0;
    var listaimg = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];

    $(function() {
        setInterval(changeImage, 4000);
    });

    function changeImage() {
        const time = 600;
        $('body').css("background-image", 'url(' + listaimg[index] + ')').fadeOut(time).fadeIn(time);                  
        index++;
                  
        if(index == 3)
            index = 0;
    }
    
});