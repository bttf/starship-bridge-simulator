import * as React from 'react';
import './styles.scss';
import { IWarpSpeed } from 'starbridge/lib/WarpSpeeds';

interface SpeedLabelProps {
    key: number;
    index: number;
    warpSpeed: IWarpSpeed;
    targetWarpSpeed: IWarpSpeed;
    isActive?: boolean;
    setTargetWarpSpeed: (warpSpeed: IWarpSpeed) => void;
}

interface SpeedLabelState {
    isActive: boolean;
}

export default class SpeedLabel extends React.PureComponent<SpeedLabelProps, SpeedLabelState> {
    refs: {
        [key: string]: (Element);
        label: (HTMLDivElement);
    };

    constructor(props: SpeedLabelProps) {
        super(props);

        this.state = {
            isActive: false,
        };
    }

    componentDidMount() {
        const index = this.props.index + 1;

        setTimeout(() => {
            this.refs.label.className = this.refs.label.className.concat(' visible');
        }, index * 50);
    }

    componentWillReceiveProps(nextProps: SpeedLabelProps) {
        // if ((this.state.isActive && nextProps.isActive)) {
        // if ((this.state.isActive && nextProps.isActive) ||
        this.setState({
            isActive: this.props.targetWarpSpeed.velocity === this.props.warpSpeed.velocity,
        });
    }

    onClick() {
        this.props.setTargetWarpSpeed(this.props.warpSpeed);
        this.setState({ isActive: true });
        if (this.props.warpSpeed.velocity === 64) {
            console.log('onclick state.isActive', this.state.isActive);
        }
    }

    render() {
        const isActive = this.state.isActive || this.props.isActive;
        if (this.props.warpSpeed.velocity === 64) {
            console.log('isActive', isActive);
        }
        const backgroundColor = `hsla(${this.props.index * 5}, 50%, 45%, ${isActive ? '1' : '0'})`;
        const border = `1px solid hsla(${this.props.index * 5}, 100%, 65%, 1)`;
        const style = {
            border,
            backgroundColor,
        };

        return (
            <div
                className={`speed-label ${this.props.warpSpeed.slug}`}
                style={style}
                ref="label"
                onClick={this.onClick.bind(this)}
            >{this.props.warpSpeed.label}</div>
        )
    }
}