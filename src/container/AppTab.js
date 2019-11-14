import { TabBar } from 'antd-mobile';
import React from 'react'
import AppHome from './AppHome';
import Shop from './Shop';
import Idea from './Idea';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"//key可以随便写  几个item下面有几栏
            // icon={<i style={{fontSize:22}} className='iconfont icon-shouye'></i>
            // }
            // selectedIcon={
            //     <i style={{fontSize:22}} className='iconfont icon-shouye'></i>
            // }
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:`url('img/26.png') center center /  28px 28px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  `url('img/27.png') center center /  28px 28px no-repeat`
                }}
              />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:`url('img/28.png') center center /  28px 28px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  `url('img/29.png') center center /  28px 28px no-repeat`
                }}
              />
            }
            title="灵感"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'idea'}
            onPress={() => {
              this.setState({
                selectedTab: 'idea',
              });
            }}
          >
            <Idea/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:`url('img/30.png') center center /  28px 28px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  `url('img/31.png') center center /  28px 28px no-repeat`
                }}
              />
            }
            title="商城"
            key="Koubei"
            selected={this.state.selectedTab === 'shop'}
            onPress={() => {
              this.setState({
                selectedTab: 'shop',
              });
            }}
            data-seed="logId1"
          >
            <Shop/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:`url('img/32.png') center center /  28px 28px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  `url('img/33.png') center center /  28px 28px no-repeat`
                }}
              />
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}