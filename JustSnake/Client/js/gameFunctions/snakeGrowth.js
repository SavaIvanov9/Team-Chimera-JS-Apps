import { variables } from 'variables';
import { gameArea } from 'gameArea';
import { dinner } from 'dinner';
import { checkCollision } from 'collision';
import { init } from 'gameInit';

const snakeGrowth = (function() {
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
        //restart game
        // btn.removeAttribute('disabled', true);

        variables.ctx.clearRect(0, 0, variables.$width, variables.$height);
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

}());

export { snakeGrowth }