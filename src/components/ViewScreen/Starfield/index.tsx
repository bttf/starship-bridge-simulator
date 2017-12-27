import * as React from 'react';
import Starfield from './starfield';
import { IWarpSpeed } from 'starbridge/lib/WarpSpeeds';
import './styles.scss';

interface StarfieldProps {
    targetWarpSpeed: IWarpSpeed;
    currentWarpSpeedVelocity: number;
    setCurrentWarpSpeedVelocity: (velocity: number) => void;
}

export default class ViewScreen extends React.PureComponent<StarfieldProps, {}> {
    starfield: Starfield;

    refs: {
        [key: string]: (Element);
        canvas: (HTMLCanvasElement);
    };

    loop(time: number = 0) {
        const velocity = +this.starfield.starSpeed.toFixed(2);

        window.requestAnimationFrame(this.loop.bind(this));

        // inform parent what current velocity is
        if (this.props.currentWarpSpeedVelocity !== this.props.targetWarpSpeed.velocity) {
            this.props.setCurrentWarpSpeedVelocity(velocity);
        }

        this.starfield.update(time);
        this.starfield.draw();
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');

        if (!context) {
            throw 'Context undefined';
        }

        this.starfield = new Starfield(canvas, context);
        this.starfield.targetSpeed = this.props.targetWarpSpeed.velocity;
        this.loop();
    }

    calculateOpacity(speed: number): number {
        if (speed > 44) {
            return 0.05;
        } else if (speed > 38) {
            return 0.1;
        } else if (speed > 32) {
            return 0.15;
        } else if (speed > 20) {
            return 0.2;
        } else if (speed > 15) {
            return 0.23;
        } else if (speed > 10) {
            return 0.3;
        } else if (speed > 8) {
            return 0.35;
        } else if (speed > 2) {
            return 0.4;
        } else {
            return 1;
        }
    }

    render() {
        if (this.starfield) {
            this.starfield.targetSpeed = this.props.targetWarpSpeed.velocity;
            this.starfield.targetOpacity = this.calculateOpacity(this.starfield.targetSpeed);
        }

        return (
            <canvas className="starfield" ref="canvas"></canvas>
        );
    }
}
