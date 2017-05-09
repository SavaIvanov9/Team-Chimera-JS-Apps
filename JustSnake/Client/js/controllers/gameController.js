import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class GameController {
    initialize(sammy) {
        $(document).ready(function() {
            let $mycanvas = $('#gameCanvas')[0];
            let ctx = $('#gameCanvas')[0].getContext('2d');
            let defaultSize = 10;
            let $width = $("#gameCanvas").width();
            let $height = $("#gameCanvas").height();
            let score = 0;
            let snake, food, direction, gameloop, snakeX, snakeY, tail, keyCode;
            //gameObject represents each standard block that builds sanke or food:
            class gameObject {
                paint(x, y) {
                    ctx.fillStyle = 'white';
                    ctx.fillRect(x * defaultSize, y * defaultSize, defaultSize, defaultSize);
                    ctx.fillStyle = 'gold';
                    ctx.fillRect(x * defaultSize + 1, y * defaultSize + 1, defaultSize - 2, defaultSize - 2);
                }
                position() {
                    food = {
                        x: randomPositionX(),
                        y: randomPositionY()
                    };
                    //functions that return random position across the canvas for x and y:
                    function randomPositionX() {
                        return Math.floor((Math.random() * ($width - 14) / 10) + 1);
                    }

                    function randomPositionY() {
                        return Math.floor((Math.random() * ($height - 14) / 10) + 1);
                    }
                    //ensuring new food does not come up at the same place where the snake is positioned at the give moment:
                    for (let i = 0; i > snake.length; i++) {
                        var snakeX = snake[i].x;
                        var snakeY = snake[i].y;
                        //if new food is created at the same place as the snake reinitiate the food with newrandom position:
                        if (food.x === snakeX && food.y === snakeY || food.y === snakeY && food.x === snakeX) {
                            food.x = randomPositionX();
                            food.y = randomPositionY();
                        }
                    }
                }
            }
            let dinner = new gameObject();

            //Class snake with color and position/draw snake:
            class ClassSnake {
                bodySnake(x, y) {
                    ctx.fillStyle = 'orange';
                    ctx.fillRect(x * defaultSize, y * defaultSize, defaultSize, defaultSize);
                    ctx.strokeStyle = 'red';
                    ctx.strokeRect(x * defaultSize, y * defaultSize, defaultSize, defaultSize);
                }
                drawSnake() {
                    let length = 4; //define intiial snake position.
                    snake = [];
                    for (let i = length - 1; i >= 0; i--) {
                        snake.push({ x: i, y: 0 });
                    }
                }
            }
            let mySnake = new ClassSnake();

            function snakeGrowth() {
                gameArea.setBackground();
                snakeX = snake[0].x;
                snakeY = snake[0].y;
                //movinfgthe snake across the canvas:
                if (direction == 'right') {
                    snakeX += 1;
                } else if (direction == 'left') {
                    snakeX -= 1;
                } else if (direction == 'up') {
                    snakeY -= 1;
                } else if (direction == 'down') {
                    snakeY += 1;
                }
                if (snakeX == -1 || snakeX >= (($width - 4) / 10) || snakeY == -1 || snakeY >= ($height) / defaultSize || checkCollision(snakeX, snakeY, snake)) {
                    // when above condition is met snake is killed:
                    localStorageManager.storeScore(score);
                    ctx.clearRect(0, 0, $width, $height);
                    gameloop = clearInterval(gameloop);
                    //Game Over screen message:
                    ctx.font = "80px  Georgia";
                    ctx.fillStyle = "black";
                    ctx.fillText('Game Over!', $width / 5, $height / 2);
                    // When sanke killed redirect to end screen:
                    setTimeout(() => {
                        sammy.redirect('#/end');
                    }, 1000);
                }
                // Check if snake is eating food:
                if (snakeX == food.x && snakeY == food.y) {
                    tail = { x: snakeX, y: snakeY }; //Create a new head instead of moving the tail
                    score += 1;
                    $scoreDisplay.html("Current Score: " + score)
                    dinner.position(); //Create new food
                } else {
                    tail = snake.pop(); //pops out the last cell
                    tail.x = snakeX;
                    tail.y = snakeY;
                }
                //puts back the tail as the first cell:
                snake.unshift(tail);
                //color the snake and the food:
                for (var i = 0; i < snake.length; i += 1) {
                    mySnake.bodySnake(snake[i].x, snake[i].y);
                }
                dinner.paint(food.x, food.y);
            }

            // checking if snake is eating itself//
            let checkCollision = function(x, y, array) {
                for (var i = 0; i < array.length; i += 1) {
                    if (array[i].x === x && array[i].y === y)
                        return true;
                }
                return false;
            };

            // Image used for gameArea background
            let $areaPic = $(document.createElement('img'))[0];
            $areaPic.src = "resources/Pics/base.jpg";

            // Class for setting the above image as background of canvas:
            class Area {
                constructor(source) {
                    this.source = source;
                }
                setBackground() {
                    ctx.drawImage(this.source, 0, 0);
                }
            }
            let gameArea = new Area($areaPic);

            //Starting the gameplay function
            var init = function() {
                direction = 'right';
                mySnake.drawSnake();
                dinner.position();
                gameloop = setInterval(snakeGrowth, 80);
            };

            //Display snake score:
            let $scoreDisplay = $("#scoreDisplay");
            $scoreDisplay.html("Current Score: " + score);

            //Navigate snake controls:
            document.onkeydown = function(event) {
                keyCode = event.which;
                switch (keyCode) {
                    case 37:
                        if (direction != 'right') {
                            direction = 'left';
                        }
                        console.log('left');
                        break;

                    case 39:
                        if (direction != 'left') {
                            direction = 'right';
                            console.log('right');
                        }
                        break;

                    case 38:
                        if (direction != 'down') {
                            direction = 'up';
                            console.log('up');
                        }
                        break;

                    case 40:
                        if (direction != 'up') {
                            direction = 'down';
                            console.log('down');
                        }
                        break;
                }
            };
            //Execution of the game start function:
            init();
        });
    }
}

const gameController = new GameController();
export { gameController };