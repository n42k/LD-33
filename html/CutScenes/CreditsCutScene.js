function CreditsCutScene()
{

    this.level = 0;
    this.start = new Date().getTime();
    this.delta = 0;
    this.over = false;
    this.background = images.death_screen;

}

CreditsCutScene.prototype.render = function()
{
    ctx.drawImage(this.background, 0, 0);
    ctx.fillStyle = "#FF0000";
    ctx.font = "30px Monotone";

    ctx.fillText("Credits", width/2 - 50, height/2);
}

CreditsCutScene.prototype.tick = function()
{

    this.delta = new Date().getTime() - this.start;
    if(this.delta > 5000)
        this.stop();
}

CreditsCutScene.prototype.stop = function()
{
    this.over = true;
}

CreditsCutScene.prototype.switchState = function()
{
    switchState(new CutSceneState(new MetroCutScene()));
}