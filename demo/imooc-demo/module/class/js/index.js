window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop; 
    var nav = document.getElementById( "section-nav-class" );
    var fixnav = document.getElementById( "section-fixnav-class" );
    var backTop = document.getElementById( "backTop" );
    var top = document.getElementById("position-top").offsetTop + 12;
    if( t >= top) {
        nav.style.display = "none";
        fixnav.style.display = "block";
        backTop.style.display = "block";
    } else {
        nav.style.display = "block";
        fixnav.style.display = "none";
        backTop.style.display = "none";
    }
}