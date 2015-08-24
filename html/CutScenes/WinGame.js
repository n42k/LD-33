function WinGame()
{
    this.level = 0;
    this.start = new Date().getTime();
    this.delta = 0;
    this.over = false;
    this.background = images.death_screen;
}

WinGame.prototype.render = function()
{
    ctx.drawImage(this.background, 0, 0);
    ctx.fillStyle = "#00FF00";
    ctx.font = "50px Monospace";
    ctx.textAlign = "center";

    ctx.fillText("Congratulations!", width/2, 240);

    ctx.font = "30px Monospace";
    ctx.fillText("You have put an end", width/2, 240 + 60 + 40);
    ctx.fillText("to the world's most EVIL companies", width/2, 240 + 60 + 80);
    ctx.fillText("At least until the next hour,", width/2, 240 + 60 + 120);
    ctx.fillText("When the backup servers turn on.", width/2, 240 + 60 + 160);


}

WinGame.prototype.tick = function()
{

    this.delta = new Date().getTime() - this.start;
    if(this.delta > 4000)
        this.stop();
}

WinGame.prototype.stop = function()
{
    this.over = true;
}

WinGame.prototype.switchState = function()
{
    nextLevel = 0;
    switchState(new CutSceneState(new EndGame()));
}
