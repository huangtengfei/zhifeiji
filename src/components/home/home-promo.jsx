import React, { Component, PropTypes } from 'react';

import { Carousel } from 'antd';

export default class HomePromo extends Component { 
  
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div>
            <img src="http://yanxuan.nosdn.127.net/93f73fde35adc07495d78be3b495263a.jpg?imageView&quality=95&thumbnail=1920x480" alt=""/>
          </div>
          <div>
            <img src="http://yanxuan.nosdn.127.net/5128c8671b8c52cf6654e1763467305a.jpg?imageView&quality=95&thumbnail=1920x480" alt=""/>
          </div>
          <div>
            <img src="http://yanxuan.nosdn.127.net/93f73fde35adc07495d78be3b495263a.jpg?imageView&quality=95&thumbnail=1920x480" alt=""/>
          </div>
          <div>
            <img src="http://yanxuan.nosdn.127.net/5128c8671b8c52cf6654e1763467305a.jpg?imageView&quality=95&thumbnail=1920x480" alt=""/>
          </div>
        </Carousel>
      </div>
    )
  }
}