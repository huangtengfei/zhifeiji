import React, { Component, PropTypes } from 'react';
import { Row, Col, Breadcrumb, Card, Pagination } from 'antd';

import MainLayout from '../common/main-layout';

const getProds = () => {
  let prods = [];
  for(let i = 0; i < 12; i++){
    prods.push({
      itemId: '1000000001',
      title: 'Europe Street beat',
      href: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    })
  }
  return prods;
}

export default class ListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: '某某',
      prods: getProds()
    };
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    let prodNodes = this.state.prods.map((prod, i) => {
      return (
        <Col span="6" key={i} className="col">
          <Card style={{ margin: '10px' }} bodyStyle={{ padding: 0 }}>
            <div className="image">
              <a href="/views/detail.html">
                <img alt="example" width="100%" src="http://yanxuan.nosdn.127.net/0575846e0c6207a99e9b0941ade2c57c.jpg?imageView&quality=90&thumbnail=430x430" />
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
        <div>
          <Row>
            <Col span={3}>
              
            </Col>
            <Col span={18}>
              <div className="breadcrumb">
                <Breadcrumb separator=">">
                  <Breadcrumb.Item>全部商品</Breadcrumb.Item>
                  <Breadcrumb.Item>{this.state.category}</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <Row>
                {prodNodes}
              </Row>
              <div className="wrapper">
                <Pagination defaultCurrent={1} total={500} className="pagination" />
              </div>      
            </Col>
            <Col span={3}>
              
            </Col>
          </Row> 
        </div>
      </MainLayout>
    )
  }
}