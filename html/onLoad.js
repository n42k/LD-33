var canvas, ctx;
var width, height;
var gameState;
var mouse;

canvas = document.getElementById("canvas");

window.onload = function()
{
    if(canvas.getContext)
    {
        ctx =  canvas.getContext("2d");
        width = canvas.width;
        height = canvas.height;

        loadTiles();
    }
    else
    {
        alert("Your browser does not support this game.");
    }
}

function afterLoadTiles()
{
    loadImages();
}

function afterLoadImages()
{
    mouse = new mouseCoordinates(400, 300);
    gameState = new MainGameState(new Level(tilemaps[0], []));

    onFrame();
}
