var canvas = document.getElementById('canvas');
//var llama = document.getElementById('llama');

var image1 = new Image();
image1.src = 'http://t12.deviantart.net/iE8q6EVrpKBvIsNoCiKNMT_Mc64=/300x200/filters:fixed_height(100,100):origin()/pre10/9ebf/th/pre/f/2011/219/7/7/rambo_llama_by_llokorco-d45qko6.png';

var enemies = [];

var Enemy = function(x, y) {
    this.name = 'Joey';
    this.img = image1;
    this.x = x;
    this.y = y;
};

for(var i = 0; i < 100; i++) {
    var x = Math.floor((Math.random() * window.innerWidth) + 1);
    var y = Math.floor((Math.random() * window.innerHeight) + 1);

    enemies.push(new Enemy(x, y));
}

var ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

setInterval(function() {
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);

    for(var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        ctx.drawImage(enemy.img, enemy.x, enemy.y);
        enemy.y += 25;
        if(enemy.y > window.innerHeight) {
            enemy.y = 0-enemy.img.height;
        }
    }
}, 50);