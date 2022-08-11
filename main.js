canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.linewidth = 50;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.linewidth = 50;
ctx.arc(260, 210, 40 , 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.linewidth = 50;
ctx.arc(360, 210, 40 , 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.linewidth = 50;
ctx.arc(460, 210, 40 , 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.linewidth = 50;
ctx.arc(310, 250, 40 , 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.linewidth = 50;
ctx.arc(410, 250, 40 , 0, 2*Math.PI);
ctx.stroke();