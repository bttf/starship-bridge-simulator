import * as React from 'react';
import Panel from '../Panel';
import Starfield from './Starfield';

export default class ViewScreen extends React.Component {
    render() {
        return (
            <div className="view-screen">
                <Panel title="ViewScreen">
                    <Starfield />
                </Panel>
            </div>
        );
    }
}
