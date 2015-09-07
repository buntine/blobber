window.onload = function(){

  var player = {
    x: 10,
    y: 10,
    image: new Image(),
    speed: 5,
  },
  c = document.getElementById("blobber"),
  ctx = c.getContext("2d");

  player.image.src = "images/blobber.png";

  window.onkeydown = function(e){
    if (e.keyCode == 37 && player.x > 0) {
      player.x -= player.speed;
    } else if (e.keyCode == 38 && player.y > 0) {
      player.y -= player.speed;
    } else if (e.keyCode == 39 && (player.x + player.image.width) < c.width) {
      player.x += player.speed;
    } else if (e.keyCode == 40 && (player.y + player.image.height) < c.height) {
      player.y += player.speed;
    }
  };

  (function render(){
    window.requestAnimationFrame(render);

    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(player.image, player.x, player.y);
  })();

};
