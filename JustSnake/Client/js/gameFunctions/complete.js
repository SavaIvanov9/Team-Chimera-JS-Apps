const variables = {
    $mycanvas: $('#gameCanvas')[0],
    ctx: $('#gameCanvas')[0].getContext('2d'),
    defaultSize: 10,
    $width: $("#gameCanvas").width(),
    $height: $("#gameCanvas").height(),
    score: 0,
    snake: undefined,
    food: undefined,
    direction: undefined

}



class gameObject {

    paint(x, y) {
        variables.ctx.fillStyle = 'white';
        variables.ctx.fillRect(x * variables.defaultSize, y * variables.defaultSize, variables.defaultSize, variables.defaultSize);
        variables.ctx.fillStyle = 'gold';
        variables.ctx.fillRect(x * variables.defaultSize + 1, y * variables.defaultSize + 1, variables.defaultSize - 2, variables.defaultSize - 2);
    }

    position() {
        variables.food = {
            x: randomPositionX(),
            y: randomPositionY()
        }

        function randomPositionX() {
            return Math.floor((Math.random() * (variables.$width - 14) / 10) + 1);
        }

        function randomPositionY() {
            return Math.floor((Math.random() * (variables.$height - 14) / 10) + 1);
        }
        for (var i = 0; i > variables.snake.length; i++) {
            var snakeX = variables.snake[i].x;
            var snakeY = variables.snake[i].y;

            if (variables.food.x === snakeX && variables.food.y === snakeY || variables.food.y === snakeY && variables.food.x === snakeX) {
                variables.food.x = randomPositionX();
                variables.food.y = randomPositionY();
            }
        }
    }

}


let dinner = new gameObject()







class ClassSnake {
    bodySnake(x, y) {
        variables.ctx.fillStyle = 'orange';
        variables.ctx.fillRect(x * variables.defaultSize, y * variables.defaultSize, variables.defaultSize, variables.defaultSize);
        variables.ctx.strokeStyle = 'red';
        variables.ctx.strokeRect(x * variables.defaultSize, y * variables.defaultSize, variables.defaultSize, variables.defaultSize);
    }

    drawSnake() {
        let length = 4;
        variables.snake = [];
        for (let i = length - 1; i >= 0; i--) {
            variables.snake.push({ x: i, y: 0 });
        }
    }
}

let mySnake = new ClassSnake()



function snakeGrowth() {
    gameArea.setBackground()

    //  btn.setAttribute('disabled', true);

    var snakeX = variables.snake[0].x;
    var snakeY = variables.snake[0].y;

    if (variables.direction == 'right') {
        snakeX += 1;
    } else if (variables.direction == 'left') {
        snakeX -= 1;
    } else if (variables.direction == 'up') {
        snakeY -= 1;
    } else if (variables.direction == 'down') {
        snakeY += 1;
    }

    if (snakeX == -1 || snakeX >= ((variables.$width - 4) / 10) || snakeY == -1 || snakeY >= (variables.$height) / variables.defaultSize || checkCollision(snakeX, snakeY, variables.snake)) {


        variables.ctx.clearRect(0, 0, variables.$width, variables.$height);
        variables.ctx.text("new dialog title");
        gameloop = clearInterval(gameloop);


    }

    if (snakeX == variables.food.x && snakeY == variables.food.y) {
        tail = { x: snakeX, y: snakeY }; //Create a new head instead of moving the tail
        variables.score += 1;

        dinner.position(); //Create new food
    } else {
        tail = variables.snake.pop(); //pops out the last cell
        tail.x = snakeX;
        tail.y = snakeY;
    }
    //The snake can now eat the food.
    variables.snake.unshift(tail); //puts back the tail as the first cell

    for (var i = 0; i < variables.snake.length; i += 1) {
        mySnake.bodySnake(variables.snake[i].x, variables.snake[i].y);
    }

    dinner.paint(variables.food.x, variables.food.y);

}

let checkCollision = function(x, y, array) {
    for (var i = 0; i < array.length; i += 1) {
        if (array[i].x === x && array[i].y === y)
            return true;
    }
    return false;
}



// Image used for gameArea background
let $areaPic = $(document.createElement('img'))[0];
$areaPic.src = "./base.jpg";


class Area {
    constructor(source) {
        this.source = source;
    }

    setBackground() {
        variables.ctx.drawImage(this.source, 0, 0)
    }
}

let gameArea = new Area($areaPic)





var init = function() {
    variables.direction = 'right';
    mySnake.drawSnake();
    dinner.position();
    gameloop = setInterval(snakeGrowth, 80);

}



init()

document.onkeydown = function(event) {

    keyCode = window.event.keyCode;
    keyCode = event.keyCode;

    switch (keyCode) {

        case 37:
            if (variables.direction != 'right') {
                variables.direction = 'left';
            }
            console.log('left');
            break;

        case 39:
            if (variables.direction != 'left') {
                variables.direction = 'right';
                console.log('right');
            }
            break;

        case 38:
            if (variables.direction != 'down') {
                variables.direction = 'up';
                console.log('up');
            }
            break;

        case 40:
            if (variables.direction != 'up') {
                variables.direction = 'down';
                console.log('down');
            }
            break;
    }
}