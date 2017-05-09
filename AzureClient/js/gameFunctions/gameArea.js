import { variables } from 'variables';

let $areaPic = $(document.createElement('img'))[0];
//$areaPic.src = "./base.jpg";


class Area {
    constructor(source) {
        this.source = source;
    }

    setBackground() {
        variables.ctx.drawImage(this.source, 0, 0)
    }
}

let gameArea = new Area($areaPic);

export { gameArea };