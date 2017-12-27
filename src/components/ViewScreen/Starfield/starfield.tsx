type Star = Array<number>;

export default class Starfield {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    centerZ: number;
    colorRatio: number;
    opacity: number = 0.1;
    numOfStars: number = 512;
    starSpeed: number = 8;
    ratio: number = 256;
    stars: Array<Star> = [];
    transitionSpeed: number = 2;
    targetSpeed: number = 8; // warp 1
    targetOpacity: number = 0.4 // warp 1

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.context = context;
        this.width = canvas.offsetWidth;
        this.height = canvas.offsetHeight;
        this.centerX = Math.round(this.width / 2);
        this.centerY = Math.round(this.height / 2);
        this.centerZ = (this.centerX + this.centerY) / 2;
        this.colorRatio = 1 / this.centerZ;

        // canvas needs to be informed of what responsive height/width it is
        // in order for correct resolution to display
        canvas.width = this.width;
        canvas.height = this.height;

        for (let i = 0; i < this.numOfStars; i++) {
            this.stars.push(this.createStar());
        }
    }

    createStar(): Star {
        const star = new Array(7);

        star[0] = Math.random() * this.width * 2 - this.centerX * 2;
        star[1] = Math.random() * this.height * 2 - this.centerY * 2;
        star[2] = Math.round(Math.random() * this.centerZ);
        star[3] = 0;
        star[4] = 0;
        star[5] = 0;
        star[6] = 0;

        return star;
    }

    update(time: number) {
        for (var i = 0; i < this.stars.length; i++) {
            this.stars[i][5] = this.stars[i][3];
            this.stars[i][6] = this.stars[i][4];

            this.stars[i][2] -= this.starSpeed;
            if (this.stars[i][2] > this.centerZ) { this.stars[i][2] -= this.centerZ; }
            if (this.stars[i][2] < 0) {
                this.stars[i][2] += this.centerZ;
                this.stars[i][0] = Math.random() * this.width * 2 - this.centerX * 2;
                this.stars[i][1] = Math.random() * this.height * 2 - this.centerY * 2;
            }

            this.stars[i][3] = this.centerX + (this.stars[i][0] / this.stars[i][2]) * this.ratio;
            this.stars[i][4] = this.centerY + (this.stars[i][1] / this.stars[i][2]) * this.ratio;
        }

        for (var i = 0; i < this.transitionSpeed; i++) {
            if (this.starSpeed < this.targetSpeed) {
                this.starSpeed += 0.1;
            }
            else if (this.starSpeed > this.targetSpeed + 0.1) {
                // more gradual slowdown from qt. impulse to full stop
                if (this.targetSpeed === 0 && this.starSpeed <= .5) {
                    this.starSpeed -= 0.01;
                } else {
                    this.starSpeed -= 0.1;
                }
            }

            if (this.targetSpeed === 0 && this.starSpeed < 0.1) {
                this.starSpeed = 0.0;
            }
        }

        if (this.opacity < this.targetOpacity - 0.01) {
            this.opacity += 0.01;
        }
        else if (this.opacity > this.targetOpacity + 0.01) {
            this.opacity -= 0.01;
        }
    }

    draw() {
        this.context.fillStyle = 'rgba(0, 0, 0, ' + this.opacity + ')';
        this.context.fillRect(0, 0, this.width, this.height);

        for (var i = 0; i < this.stars.length; i++) {
          if (this.stars[i][5] > 0 && this.stars[i][5] < this.width && this.stars[i][6] > 0 && this.stars[i][6] < this.height) {
            if (this.starSpeed > 0) {
              this.context.strokeStyle = 'white';
              this.context.lineWidth = (1 - this.colorRatio * this.stars[i][2]) * 2;
              this.context.beginPath();
              this.context.moveTo(this.stars[i][5], this.stars[i][6]);
              this.context.lineTo(this.stars[i][3], this.stars[i][4]);
              this.context.stroke();
              this.context.closePath();
            } else {
              // to make stars more visible when speed is 0
              var a3 = this.stars[i][3] + (300 * (1 / this.centerZ));
              var b3 = this.stars[i][4] + (350 * (1 / this.centerZ));

              this.context.strokeStyle = 'white';
              this.context.lineWidth = (1 - this.colorRatio * this.stars[i][2]) * 2;
              this.context.beginPath();
              this.context.moveTo(this.stars[i][5], this.stars[i][6]);
              this.context.lineTo(a3, b3);
              this.context.stroke();
              this.context.closePath();
            }
          }
        }
    }
}
