window.onload = function(){

  var player = {
    x: 10,
    y: 10,
    image: new Image(),
    speed: 3,
  },
  c = document.getElementById("blobber"),
  ctx = c.getContext("2d");

  player.image.src = "images/blobber.png";

  window.onkeydown = function(e){
    if (e.keyCode == 37) {
      player.x -= player.speed;
    } else if (e.keyCode == 38) {
      player.y -= player.speed;
    } else if (e.keyCode == 39) {
      player.x += player.speed;
    } else if (e.keyCode == 40) {
      player.y += player.speed;
    }
  };

  (function render(){
    window.requestAnimationFrame(render);

    ctx.drawImage(player.image, player.x, player.y);
  })();

};
