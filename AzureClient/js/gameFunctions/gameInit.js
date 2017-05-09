import { variables } from 'variables';
import { mySnake } from 'snake';
import { dinner } from 'dinner';
import { snakeGrowth } from 'snakeGrowth';

const init = (function() {
    variables.direction = 'right';
    mySnake.drawSnake();
    dinner.position();
    gameloop = setInterval(snakeGrowth, 80);

}())
export { init }