import * as React from 'react';
import Panel from 'components/Panel';
import Starfield from './Starfield';
import { IWarpSpeed } from 'lib/WarpSpeeds';
import './styles.scss';

interface ViewScreenProps {
    currentWarpSpeedVelocity: number;
    targetWarpSpeed: IWarpSpeed;
    setCurrentWarpSpeedVelocity: (velocity: number) => void;
}

export default class ViewScreen extends React.PureComponent<ViewScreenProps, {}> {
    render() {
        return (
            <div className="view-screen">
                <Panel title="ViewScreen">
                    <Starfield
                        targetWarpSpeed={this.props.targetWarpSpeed}
                        currentWarpSpeedVelocity={this.props.currentWarpSpeedVelocity}
                        setCurrentWarpSpeedVelocity={this.props.setCurrentWarpSpeedVelocity}
                    />
                </Panel>
            </div>
        );
    }
}
