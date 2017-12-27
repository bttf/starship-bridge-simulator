import kebabCase = require('lodash/kebabCase');

export interface IWarpSpeed {
    velocity: number;
    label: string;
    slug?: string;
}

class WarpSpeed implements IWarpSpeed {
    velocity: number;
    label: string;
    slug: string;

    constructor({ velocity, label }: IWarpSpeed) {
        this.velocity = velocity;
        this.label = label;
        this.slug = kebabCase(this.label);
    }
}

export default [
    new WarpSpeed({ velocity: 64, label: 'Warp 9'}),
    new WarpSpeed({ velocity: 44, label: 'Warp 8'}),
    new WarpSpeed({ velocity: 38, label: 'Warp 7'}),
    new WarpSpeed({ velocity: 32, label: 'Warp 6'}),
    new WarpSpeed({ velocity: 28, label: 'Warp 5'}),
    new WarpSpeed({ velocity: 20, label: 'Warp 4'}),
    new WarpSpeed({ velocity: 15, label: 'Warp 3'}),
    new WarpSpeed({ velocity: 10, label: 'Warp 2'}),
    new WarpSpeed({ velocity: 8, label: 'Warp 1'}),
    new WarpSpeed({ velocity: 2, label: 'Full Impulse'}),
    new WarpSpeed({ velocity: 1, label: 'Half Impulse'}),
    new WarpSpeed({ velocity: .5, label: 'Quarter Impulse'}),
    new WarpSpeed({ velocity: 0, label: 'Full Stop'}),
];