import React, { Component } from 'react'
import { NavBar, Icon, Carousel , SearchBar,Grid,WhiteSpace, WingBlank} from 'antd-mobile';

var array1 = ['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类']
const data = Array.from(new Array(10)).map((val,i) => ({
    icon: `img/${i+8}.png`,
    text:`${array1[i]}`,
  }));
var array2 = ['Too Art Studio欧式风格精细...','顺顺工艺欧式风格塑料外框黑...']
const data1 = Array.from(new Array(2)).map((val,i) => ({
    icon: `img/${i+18}.jpg`,
    text:`${array2[i]}`,
  }));
export default class Shop extends Component {
    state = {
        data: ['1', '2','3','4'],
        imgHeight: 400,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
            data: ['1.jpg', '1.jpg','1.jpg','1.jpg']
            });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    <Icon key='0' type='search' />
                ]}
                >商城</NavBar>
                <SearchBar placeholder="输入关键字搜索" maxLength={8}/>
                <Carousel
                    autoplay={false}
                    infinite>
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        style={{display:'inline-block',width:'100%'}}>
                        <img
                            src={`img/${val}`}
                            style={{width:'100%',verticalAlign:'top'}}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: '200px' });
                            }}/>
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace />
                <WingBlank>
                    <Grid data={data} columnNum={5} style={{width:'100%',height:'100%'}} />
                </WingBlank>
                <WingBlank>
                    <Grid data={data1}
                        columnNum={2}
                        renderItem={dataItem => ( 
                            <div>
                                <img src={dataItem.icon} style={{width:'100%',height:'100%' }}/>
                                <div style={{ color:'#888',fontSize:'14px',marginTop:'12px'}}>
                                    <span>{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                    />
                </WingBlank>
            </div>
        )
    }
}