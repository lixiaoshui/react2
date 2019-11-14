import React, { Component } from 'react'
import { NavBar,Icon, Tabs, WhiteSpace, Badge,Grid} from 'antd-mobile';
const imgdata = Array.from(new Array(6)).map((val,i) => ({
    icon: `img/${i+20}.jpg`,
  }));
const tabs = [
    { title: <Badge>推荐</Badge> },
    { title: <Badge>冬季</Badge> },
    { title: <Badge>宜家</Badge> },
    { title: <Badge>小清新</Badge> },
    { title: <Badge>小户型</Badge> },
    { title: <Badge>个性色彩</Badge> },
  ];
export default class Idea extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key='0' type='search' style={{marginRight:'16px'}} />
                    ]}
                >灵感
                </NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
                        <Grid data={imgdata}
                            columnNum={2}
                            renderItem={dataItem => (
                                <div style={{height:'100%',marginLeft:'15px',marginRight:'15px'}}>
                                    <img src={dataItem.icon} style={{ width: '100%', height: '100%' }} />
                                </div>
                            )}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px'}}>
                        冬季
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px'}}>
                        宜家
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px'}}>
                        小清新
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px'}}>
                        小户型
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px'}}>
                        个性色彩
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}