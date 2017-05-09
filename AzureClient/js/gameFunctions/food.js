import { variables } from 'variables';

class GameObject {

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

let dinner = new GameObject()

export { dinner };