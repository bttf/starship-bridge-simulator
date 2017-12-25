import * as React from 'react';
import Starfield from './starfield';
import './styles.scss';

export default class ViewScreen extends React.PureComponent {
    starfield: Starfield;

    refs: {
        [key: string]: (Element);
        canvas: (HTMLCanvasElement);
    };

    constructor(props: {}) {
        super(props);
    }

    loop(time: number = 0) {
        window.requestAnimationFrame(this.loop.bind(this));
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
        this.loop();
    }

    render() {
        return (
            <canvas className="starfield" ref="canvas"></canvas>
        );
    }
}
