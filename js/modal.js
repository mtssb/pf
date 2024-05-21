$(function(){
    $(".play").on("click",function(){
    $(".movie-modal").addClass("active");
    $("html").css({"overflow-y":"hidden"});
    return false;
    });
    $("#close,#overlay").on("click",function(){
    $(".movie-modal").removeClass("active");
    $("html").css({"overflow-y":"auto"});
    });
    });
    
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    function onYouTubeIframeAPIReady() {
    player = new YT.Player("player",{
    });
    }
    var ovPause = document.getElementById('overlay');
    ovPause.addEventListener('click', function() {
    player.pauseVideo();
    });
    var btnPause = document.getElementById('close');
    btnPause.addEventListener('click', function() {
    player.pauseVideo();
});