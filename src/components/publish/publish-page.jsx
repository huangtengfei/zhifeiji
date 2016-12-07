import React, { Component, PropTypes } from 'react';
import { Row, Col, Select, Checkbox, Button, Form, Input, InputNumber, Cascader, Upload, Icon, Modal } from 'antd';

import MainLayout from '../common/main-layout';

import categoryData from './category.js';

const Option = Select.Option;
const createForm = Form.create;
const FormItem = Form.Item;

class Publish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: ''
    };
  }
  
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      values.detail = this.state.detail;
      console.log(values);
      service.publish(values).then(() => {
        Modal.success({
          title: '发布成功'
        });
        console.log('publish success');
      })
    });
  }

  normFile(e) {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  handleChange(info) {
    if (info.file.status !== 'uploading') {
      console.log('---upload---')
      console.log(info.file, info.fileList);
      // service.upload(info.file);
    }
  }

  handleTextChange(value) {
    console.log('--text---');
    console.log(value);
    this.setState({
      detail: value
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    const imageUrl = this.state.imageUrl || '';
    return (
      <MainLayout>
        <div className="main">
          <Row>
            <Col span={1}>
              
            </Col>
            <Col span={22}>
              <Form horizontal>
                <FormItem
                  {...formItemLayout}
                  label="标题"
                  hasFeedback
                >
                  {getFieldDecorator('title', {
                    rules: [
                      { required: true, message: '标题必填' },
                      { max: 10, message: '最长10个字' }
                    ],
                  })(
                    <Input placeholder="请输入标题" />
                  )}
                </FormItem>

                <FormItem
                  {...formItemLayout}
                  label="描述"
                >
                  {getFieldDecorator('desc', {
                    rules: [
                      { max: 30, message: '最长30个字' },
                    ],
                  })(
                    <Input type="textarea" placeholder="请用简短的话描述一下" id="desc" name="desc" />
                  )}
                </FormItem>

                <FormItem
                  {...formItemLayout}
                  label="分类"
                >
                  {getFieldDecorator('category', {
                    rules: [
                      { type: 'array', required: true, message: '分类必选 ' }
                    ],
                  })(
                    <Cascader style={{ width: 200 }} options={categoryData} placeholder="请选择分类"/>
                  )}
                </FormItem>

                <FormItem
                  {...formItemLayout}
                  label="价格"
                >
                  {getFieldDecorator('price', {
                    rules: [
                      { type: 'number', required: true, message: '价格必填' }
                    ],
                  })(
                    <InputNumber step={0.1} style={{ width: 100 }} />
                  )}
                  <span className="ant-form-text"> 元</span>
                </FormItem>

                <FormItem
                  {...formItemLayout}
                  label="商品主图"
                >
                  {getFieldDecorator('upload', {
                    valuePropName: 'fileList',
                    normalize: this.normFile
                  })(
                    <Upload name="logo" listType="picture" onChange={this.handleChange.bind(this)}>
                      <Button type="ghost">
                        <Icon type="upload" /> Click to Upload
                      </Button>
                    </Upload>
                  )}
                </FormItem>

                <FormItem wrapperCol={{ span: 12, offset: 7 }}>
                  <Button type="primary" onClick={this.handleSubmit.bind(this)}>发布</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button type="ghost" onClick={this.handleReset.bind(this)}>重置</Button>
                </FormItem>
              </Form>
            </Col>
            <Col span={5}>
              
            </Col>
          </Row> 
        </div>
      </MainLayout>
    )
  }
}

Publish = createForm()(Publish);

export default Publish;