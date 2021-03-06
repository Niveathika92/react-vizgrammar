/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { AppBar, Toolbar, Typography, Grid, IconButton, Button } from 'material-ui';
import HomeIcon from 'material-ui-icons/ArrowBack';
import { Link } from 'react-router-dom';
import ChartWrapper from '../ChartWrapper';
import VizG from '../../src/VizG';
import { syntaxHighlight } from './util/SyntaxHighLight';
import GitHub from '../components/GitHub';

export default class TableChartSamples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                [0, 10, 1, 'Piston'],
            ],
            timer: 1,
        };

        this.lineChartConfig = {
            charts: [
                {
                    type: 'table',
                    columns: ['EngineType', 'torque', 'rpm'],
                    columnTitles: ['Engine Type', 'Engine Torque', 'Engine RPM'],
                },
            ],
            maxLength: 7,
            colorBasedStyle: true,
        };

        this.metadata = {
            names: ['rpm', 'torque', 'horsepower', 'EngineType'],
            types: ['linear', 'linear', 'ordinal', 'ordinal'],
        };

        this.intervalObj = null;
    }

    componentDidMount() {
        this.intervalObj = setInterval(() => {
            this.setState({
                data: [
                    [Math.round(Math.random() * 100), Math.round(Math.random() * 100), 1, 'Piston'],
                    [Math.round(Math.random() * 100), Math.round(Math.random() * 100), 1, 'rotary'],
                ],
                timer: this.state.timer + 1,
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalObj);
    }

    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar >
                        <Link to='/samples' >
                            <IconButton color="contrast" aria-label="Menu">

                                <HomeIcon />
                            </IconButton>
                        </Link>
                        <Typography type="title" color="inherit" style={{ flex: 1 }} >
                            React-VizGrammar - Pie Chart Samples
                        </Typography>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <Button style={{color: '#fff'}}>
                                Getting Started
                            </Button>
                        </Link>
                        <IconButton
                            color="inherit"
                            onClick={() => { window.location.href = 'https://github.com/wso2/react-vizgrammar'; }}
                            title="See the source on GitHub"
                        >
                            <GitHub />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Grid container>
                    <Grid item lg={6} sm={12} xs={12}>
                        <ChartWrapper
                            title={'Table Chart Sample'}
                            chart={'table'}
                            actionBar={false}
                        >
                            <div style={{ height: 400 }}>
                                <div style={{ height: 40 }}>
                                    <VizG config={this.lineChartConfig} metadata={this.metadata} data={this.state.data} />
                                </div>
                            </div>
                            <div>
                                <pre
                                    dangerouslySetInnerHTML={
                                    {
                                        __html: syntaxHighlight(
                                                JSON.stringify(this.lineChartConfig, undefined, 4)),
                                    }
                                    }
                                />
                            </div>
                        </ChartWrapper>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <ChartWrapper
                            title={'Sample Data set and JSON configuration structure.'}
                            chart={'table'}
                            actionBar={false}
                        >
                            metadata:
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: syntaxHighlight(
                                        JSON.stringify(this.metadata, undefined, 4)),
                                }}
                            />
                            data:
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: syntaxHighlight(
                                        JSON.stringify(this.state.data, undefined, 4)),
                                }}
                            />
                            <br /><br />
                            <h3>Chart Configuration JSON structure</h3>
                            <ul>
                                <li>
                                    <strong>charts</strong> - Array of Chart objects that should be visualized.
                                    <ul>
                                        <li>
                                            <strong>Chart Object</strong>
                                            <ul>
                                                <li><strong>type</strong> - Type of the chart that need to be visualized in this case &qoute;table&qoute;</li>
                                                <li><strong>columns</strong> - String array of columns that the table should contain</li>
                                                <li><strong>columnTitles</strong> - String array of column titles corresponding to the columns declared</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><strong>maxLength</strong> - maximum number of records to be shown in the table at a time</li>
                                <li><strong>colorBasedStyle</strong> - color the column data according to the type of data in the columns(boolean value)</li>
                            </ul>
                        </ChartWrapper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
