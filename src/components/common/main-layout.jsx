import React, { Component } from 'react';
import SiteHeader from './site-header';
import TopSearch from './top-search';
import SiteMenu from './site-menu';
import SiteFooter from './site-footer';

import { Affix, Row, Col } from 'antd';

export default class MainLayout extends Component {
	constructor(props) {
		super(props);
	}

	search(value) {
		console.log(value);
		appHistory.push('/list?keyword=' + value);
	}
	
	render() {
		return (
			<div>
				<SiteHeader />
				<TopSearch placeholder="输入手工艺品名称" onSearch={this.search.bind(this)} style={{ width: '100%' }} />
				<Affix>
					<SiteMenu /> 
				</Affix>

                {this.props.children}   
				
				<SiteFooter />
			</div>
		)
	}
}