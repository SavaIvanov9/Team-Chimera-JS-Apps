import { variables } from 'variables';

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

let mySnake = new ClassSnake();

export { mySnake }