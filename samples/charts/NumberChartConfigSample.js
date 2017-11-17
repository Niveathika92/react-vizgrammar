/**
 * Copyright (c) WSO2 Inc. (http://wso2.com) All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {Component} from 'react';
import NumberCharts from '../../src/components/NumberChart.jsx';
import {Row} from './util';

class NumberChartConfigSample extends Component {

    constructor(props) {
        super(props);
        this.state={
            data : [
                [0, 10, 1, 'Piston']
            ],
            timer:1
        };
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                data : this.state.data.concat([[0, Math.round(Math.random()*100), 1, 'Piston'],[0, Math.round(Math.random()*100), 1, 'rotary']])
            });
        },1000);
    }

    numConfig = {
        x : 'torque',
        title :'Torque of Engine',
        charts : [{type: 'number'}],
        width: 400,
        height: 200
    };

    metadata = {
        'names' : ['rpm','torque','horsepower', 'EngineType'],
        'types' : ['linear','linear', 'ordinal','ordinal']
    };

    render() {
        // console.log("AAAA"+this.state.data)
        return (
            <div>
                <Row title="Number Chart Sample" chart="chart" media={true} actionBar={false}>
                    <NumberCharts config={this.numConfig} metadata={this.metadata} data={this.state.data}/>
                    <pre>
                        {
                            '{\n' +
                            '\tx : \'torque\',\n' +
                            '\ttitle :\'Torque of Engine\',\n' +
                            '\tcharts : [{type: \'number\'}],\n' +
                            '\twidth: 400,\n' +
                            '\theight: 200\n' +
                            '}'
                        }
                    </pre>
                </Row>
                <Row title="Sample DataSet" chart="chart" media={false} actionBar={false}>
                    <pre>
                        {
                            '{\n' +
                            '\tx : \'torque\',\n' +
                            '\ttitle :\'Torque of Engine\',\n' +
                            '\tcharts : [{type: \'number\'}],\n' +
                            '\twidth: 400,\n' +
                            '\theight: 200\n' +
                            '}'
                        }
                    </pre>
                </Row>
                <Row title="API" chart="chart" media={false} actionBar={false}>
                    <pre>
                        <table>
                            <thead>
                            <tr>
                                <th>Property</th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>title</td>
                                <td>String</td>
                                <td>Title of the table</td>
                            </tr>
                            <tr>
                                <td>x</td>
                                <td>String</td>
                                <td>cAttribute name for X-axis</td>
                            </tr>
                            <tr>
                                <td>maxLength</td>
                                <td>int</td>
                                <td>Maximum length of chart datatable</td>
                            </tr>
                            <tr>
                                <td>height</td>
                                <td>px</td>
                                <td>height of the chart</td>
                            </tr>
                            <tr>
                                <td>charts</td>
                                <td>object</td>
                                <td>Collection of charts</td>
                            </tr>
                            </tbody>
                        </table>
                        <br/><br/>
                        <table>
                            <thead>
                            <tr>
                                <th>Property</th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>title</td>
                                <td>String</td>
                                <td>Title of the table</td>
                            </tr>
                            <tr>
                                <td>y</td>
                                <td>String</td>
                                <td>Attribute name for Y-axis</td>
                            </tr>
                            </tbody>
                        </table>
                    </pre>
                </Row>
            </div>
        );
    }
}

export default NumberChartConfigSample;