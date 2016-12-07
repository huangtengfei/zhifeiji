import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class SiteHeader extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<header className="header">
				<Row>
					<Col span={3}>
					
					</Col>
					<Col span={18}>
					<span>纸飞机，放飞你的梦</span>
					<div className="link">
						<a href="#">登录</a>
						<a href="#">注册</a>
					</div>
					</Col>
					<Col span={3}>
					
					</Col>
				</Row>
			</header>
		)
	}
}
