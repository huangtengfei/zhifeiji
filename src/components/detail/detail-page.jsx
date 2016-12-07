import React, { Component, PropTypes } from 'react';
import { Row, Col, Breadcrumb, Carousel, Input, Button, Select, Radio, Tabs, Card } from 'antd';

import MainLayout from '../common/main-layout';

const TabPane = Tabs.TabPane;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class DetailPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainLayout>
        <Row>
          <Col span={3}>
            
          </Col>
          <Col span={18}>
            <div className="breadcrumb">
              <Breadcrumb separator=">">
                <Breadcrumb.Item>全部商品</Breadcrumb.Item>
                <Breadcrumb.Item> 单肩包</Breadcrumb.Item>
                <Breadcrumb.Item>素色单肩帆布包</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="main">
              <Row>
                <Col span={8}>
                  <div>
                    <img src="http://yanxuan.nosdn.127.net/eda8d5bbeabb1bc3a780b35d7b0272d4.jpg?imageView&quality=90&thumbnail=430x430" alt=""/>
                  </div>
                </Col>
                <Col span={12} offset={2}>
                  <div className="intro">
                    <div className="name">素色单肩帆布包</div>
                    <div className="desc">清新帆布，环保出行</div>
                  </div>
                  <div className="price">
                    <div className="pBox">
                      <span className="label">售价</span>
                      <span className="rmb">￥39.00</span>
                    </div>
                  </div>
                  <div className="number">
                    <span>数量：</span>
                    <Select style={{ width: 50 }} defaultValue="1">
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                    </Select>
                  </div>
                  <div className="category">
                    <RadioGroup defaultValue="a">
                      <RadioButton value="a">款式1</RadioButton>
                      <RadioButton value="b">款式2</RadioButton>
                      <RadioButton value="c">款式3</RadioButton>
                    </RadioGroup>
                  </div>
                  <div className="action">
                    <Button type="ghost" className="buyNow">立即购买</Button>
                    <Button type="primary" className="addCart">加入购物车</Button>
                  </div>
                </Col>
              </Row>   
              <Row className="bd">
                <Col span={16}>
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="详情" key="1">
                      <div className="detail">
                        <img src="../../assets/images/detail/1.jpg" alt=""/>
                        <img src="../../assets/images/detail/2.jpg" alt=""/>
                        <img src="../../assets/images/detail/3.jpg" alt=""/>
                        <img src="../../assets/images/detail/4.jpg" alt=""/>
                        <img src="../../assets/images/detail/5.jpg" alt=""/>
                      </div>
                    </TabPane>
                    <TabPane tab="评价" key="2">暂无评价</TabPane>           
                  </Tabs>
                </Col>
                <Col span={6} offset={2}> 
                  <Card title="热卖推荐" extra={<a href="#">更多</a>} style={{ marginTop: 30 }}>
                    <div className="sidebar">
                      <img src="http://yanxuan.nosdn.127.net/5fb51f889bc52d16193c6f1d702731fe.jpg?imageView&quality=90&thumbnail=430x430" alt=""/>
                      <img src="http://yanxuan.nosdn.127.net/78ca108bd6dcec27e53be6e704dd5eef.jpg?imageView&quality=90&thumbnail=430x430" alt=""/>
                      <img src="http://yanxuan.nosdn.127.net/56366e6176691383da16e79365870a9f.jpg?imageView&quality=90&thumbnail=430x430" alt=""/>
                    </div>
                  </Card>        
                </Col>
              </Row>
            </div>
          </Col>
        </Row> 
      </MainLayout>
    )
  }
}