function Explosion(x, y)
{
    this.x = x;
    this.y = y;
    this.iFrame = currentFrame;
    this.DURATION = 45;
    currentMusic.pause();
    var explode = new Audio("music/explosion.ogg");
    explode.play();
}

Explosion.prototype.draw = function()
{
    var dif = currentFrame - this.iFrame;

    if(dif > this.DURATION)
    {
        currentMusic.pause();
        return;
    }

    var factor = Math.sin(Math.PI * dif/this.DURATION);

    var size = 800 * factor;

    ctx.save();
    ctx.globalAlpha = factor;
    ctx.drawImage(images.explosion, this.x - size/2, this.y - size/2, size, size);
    ctx.restore();

    var BURN_COUNT = 15;
    for(var i = 0; i < BURN_COUNT; i++)
    {
        var angle = Math.random() * 2 * Math.PI;
        var length = size/2 + 50 * Math.random();
        var x = this.x + length * Math.cos(angle);
        var y = this.y + length * Math.sin(angle);

        gameState.level.tilemap.prerender_ctx.drawImage(images.burn0, x, y);
    }
}
