import React, { Component, PropTypes } from 'react';

import { Row, Col } from 'antd';

export default class SiteFooter extends Component { 
  
  render() {
    return (
      <div>
        <footer className="footer">
          <Row>
            <Col span={3}>
              
            </Col>
            <Col span={18}>
              <a>关于我们</a>
              <a>帮助中心</a>
              <a>售后服务</a>
              <a>商务合作</a>
            </Col>
            <Col span={3} >

            </Col>
          </Row>
        </footer>
      </div>
    )
  }
}