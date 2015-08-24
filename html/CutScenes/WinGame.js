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
    ctx.fillStyle = "#FF0000";
    ctx.font = "30px Monotone";

    ctx.fillText("Win", width/2 - 50, height/2);
}

WinGame.prototype.tick = function()
{

    this.delta = new Date().getTime() - this.start;
    console.log("WIN");
    console.log(this.delta);
    if(this.delta > 2000)
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
