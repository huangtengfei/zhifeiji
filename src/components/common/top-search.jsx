import React, { Component, PropTypes } from 'react';
import { Row, Col, Input, Button } from 'antd';
import classNames from 'classnames';

const InputGroup = Input.Group;

export default class TopSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      focus: false,
    };
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSearch() {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.value);
    }
  }

  render() {
    const { style, size, placeholder } = this.props;
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim(),
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus,
    });
    return (
      <div className="wrapper">
        <Row>
          <Col span={3}>
            
          </Col>
          <Col span={18}>
            <Row>
              <Col span={4} offset={4}>
                <img src="../../assets/images/logo.jpg" alt=""/>
              </Col>
              <Col span={10} className="search">       
                <div className="ant-search-input-wrapper" style={style}>
                  <InputGroup className={searchCls}>
                    <Input size="large" placeholder={placeholder} value={this.state.value}
                      onChange={this.handleInputChange.bind(this)}
                      onPressEnter={this.handleSearch.bind(this)}/>
                    <div className="ant-input-group-wrap">
                      <Button icon="search" className={btnCls} size="large" onClick={this.handleSearch.bind(this)} />
                    </div>
                  </InputGroup>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={3}>
            
          </Col>
        </Row>
      </div>
    );
  }
}