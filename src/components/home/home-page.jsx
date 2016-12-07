import React, { Component, PropTypes } from 'react';
import { Row, Col, Card } from 'antd';

import MainLayout from '../common/main-layout';
import HomePromo from './home-promo';

const getProds = () => {
  let prods = [];
  for(let i = 0; i < 24; i++){
    prods.push({
      itemId: '1000001',
      title: 'Europe Street beat',
      href: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    })
  }
  return prods;
}

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prods: getProds()
    };
  }

  render() {
    let prodNodes = this.state.prods.map((prod, i) => {
      return (
        <Col span="6" key={i} className="col">
          <Card style={{ margin: '10px' }} bodyStyle={{ padding: 0 }}>
            <div className="image">
              <a href="/views/detail.html">
                <img alt="example" width="100%" src="http://yanxuan.nosdn.127.net/22d63beed5a3b7143de326135801fb33.png?imageView&quality=90&thumbnail=430x430" />
              </a>  
            </div>
            <div className="card">
              <h3>素色单肩帆布包</h3>
              <p>￥99.80</p>
            </div>
          </Card>
        </Col>
      )
    })
    return (
		<MainLayout>
			<HomePromo />
			<Row>
				<Col span={3}>
					
				</Col>
				<Col span={18}>
					<Row>
					{prodNodes}
					</Row>
				</Col>
				<Col span={3}>
					
				</Col>
			</Row>   
		</MainLayout>
    )
  }
}