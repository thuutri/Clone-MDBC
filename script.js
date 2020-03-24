document.addEventListener('DOMContentLoaded', handle);

function handle(){
    var overlay = document.getElementsByClassName("overlay");
    var overlayMenu = overlay[0].getElementsByClassName("overlay-menu");
    var closeBtn = overlayMenu[0].getElementsByClassName("close");
    var menu = document.getElementsByClassName("menu");
    menu[0].addEventListener('click', function(){
        overlay[0].style.display = "block";
    })
    closeBtn[0].addEventListener('click', function(){
        overlay[0].style.display = "none";
    })

}