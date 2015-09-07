window.onload = function(){

  var player = {
    x: 10,
    y: 10,
    image: new Image(),
  },
  c = document.getElementById("blobber"),
  ctx = c.getContext("2d");

  player.image.src = "images/blobber.png";

  (function render(){
    window.requestAnimationFrame(render);

    ctx.drawImage(player.image, player.x, player.y);
  })();

};
