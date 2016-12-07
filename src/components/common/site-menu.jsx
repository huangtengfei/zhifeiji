import React, { Component, PropTypes } from 'react';
import { Row, Col, Menu, Icon } from 'antd';

import menus from './menus.js';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class SiteMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
    };
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    let menuNodes = menus.map((menu, i) => {
      return (
        <SubMenu key={menu.key} title={<span><Icon type="appstore" />{menu.name}</span>} className="menu">
          { 
            menu.children.map((child, i) =>{
              return (
                <Menu.Item key={child.key}>
                  <a href="/views/list.html">
                    {child.name}
                  </a>
                </Menu.Item>
              )
            })
          }       
        </SubMenu>
      )
    })
    return (
      <div>
        <Row>
          <Col span={3}>
            
          </Col>
          <Col span={18} className="menus">
            <Menu onClick={this.handleClick.bind(this)}
              selectedKeys={[this.state.current]}
              mode="horizontal">
              <Menu.Item key="home" className="menu">
                <a href="/views/home.html">
                  <Icon type="home" />首页
                </a>  
              </Menu.Item>
              <Menu.Item key="zhuanti" className="menu">
                <a href="/views/home.html">
                  <Icon type="home" />专题
                </a>  
              </Menu.Item>
              {menuNodes}
            </Menu> 
          </Col>
          <Col span={3}>
            
          </Col>
        </Row>
        {this.props.children}
      </div>
    )  
  }
}
