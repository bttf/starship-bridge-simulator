import * as React from 'react';
import Panel from '../Panel';
import SpeedLabel from './SpeedLabel';
import WarpSpeeds, { IWarpSpeed } from 'starbridge/lib/WarpSpeeds';
import './styles.scss';

interface WarpIndicatorProps {
    targetWarpSpeed: IWarpSpeed;
    currentWarpSpeedVelocity: number;
    setTargetWarpSpeed: (warpSpeed: IWarpSpeed) => void;
}

export default class WarpIndicator extends React.PureComponent<WarpIndicatorProps, {}> {
    render() {
        return (
            <div className="warp-indicator">
                <Panel title="Warp Indicator">
                    <div className="container">
                        {WarpSpeeds.map((warpSpeed, index) =>
                            (<SpeedLabel
                                key={index}
                                index={index}
                                warpSpeed={warpSpeed}
                                targetWarpSpeed={this.props.targetWarpSpeed}
                                isActive={warpSpeed.velocity <= this.props.currentWarpSpeedVelocity}
                                setTargetWarpSpeed={this.props.setTargetWarpSpeed}
                            />))}
                    </div>
                </Panel>
            </div>
        );
    }
}