function Player(x, y)
{
    this.x = x;
    this.y = y;

    this.valid_x = x;
    this.valid_y = y;

    this.MOVE_SPEED = 6;

    this.movingLeft = false;
    this.movingRight = false;
    this.movingUp = false;
    this.movingDown = false;

    this.image = images["stallman_left"];

    this.dead = false;
    this.arrested = false;
}

Player.prototype.moveLeft = function(start)
{
    if(this.dead)
        return;

    this.movingLeft = start;
    if(start)
        this.image = images["stallman_left"];
}

Player.prototype.moveRight = function(start)
{
    if(this.dead)
        return;

    this.movingRight = start;
    if(start)
        this.image = images["stallman_right"];
}

Player.prototype.moveDown = function(start)
{
    if(this.dead)
        return;

    this.movingDown = start;
}

Player.prototype.moveUp = function(start)
{
    if(this.dead)
        return;

    this.movingUp = start;
}

Player.prototype.setPositionAsValid = function()
{
    this.valid_x = this.x;
    this.valid_y = this.y;
}

Player.prototype.getValidX = function()
{
    return this.valid_x;
}

Player.prototype.getValidY = function()
{
    return this.valid_y;
}

Player.prototype.rollbackX = function()
{
    this.x = this.valid_x;
}

Player.prototype.rollbackY = function()
{
    this.y = this.valid_y;
}

Player.prototype.tick = function(start)
{
    if(this.dead)
        return;

    if(this.movingLeft)
        this.x -= this.MOVE_SPEED;
    if(this.movingRight)
        this.x += this.MOVE_SPEED;

    if(this.movingUp)
        this.y -= this.MOVE_SPEED;
    if(this.movingDown)
        this.y += this.MOVE_SPEED;
}

Player.prototype.draw = function()
{
    var charHeight = 30;
    if(this.dead)
    {
        ctx.drawImage(images.body, this.x - this.image.width/2, this.y - this.image.height/2 - charHeight);
    }
    else
    {
        var jump = Math.round(currentFrame/7) % 3 == 0;

        if(jump &&
          (this.movingLeft + this.movingRight == 1 ||
           this.movingUp   + this.movingDown  == 1))
           charHeight += 5;
        ctx.drawImage(this.image, this.x -this.image.width/2, this.y -this.image.height/2 - charHeight);
    }
}

Player.prototype.getCollisions = function()
{
    return [[this.x - 14, this.y - 4], [this.x - 14, this.y + 8], [this.x + 14, this.y - 4], [this.x + 14, this.y + 8]];
}

Player.prototype.kill = function()
{
    if(!this.dead)
        this.dead = true;
}

Player.prototype.arrest = function()
{
    if(!this.arrested)
        this.arrested = true;

}
