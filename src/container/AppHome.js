import React, { Component } from 'react'
import { NavBar,  Carousel ,WingBlank, WhiteSpace,Grid} from 'antd-mobile';

const data = Array.from(new Array(3)).map((val,i) => ({icon: `img/${i+3}.jpg`}));
export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 400,
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['1.jpg', '1.jpg'],
          });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}>住吧家居</NavBar>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        style={{ display:'inline-block',width:'100%'}}
                        >
                        <img
                            src={`img/${val}`}
                            style={{ width:'100%',verticalAlign:'top'}}
                            onLoad={()=>{
                            window.dispatchEvent(new Event('resize'));
                            this.setState({imgHeight:'200px'});
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace/>
                <WingBlank>
                    <Grid data={data}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{position:'absolute',top:'0',width:'100%'}}>
                            <img src={dataItem.icon} style={{ width:'100%',height:'100%'}}/>
                        </div>
                    )}
                    />
                </WingBlank>
                <div style={{height:'100%',width:'100%'}}>
                    <p style={{fontSize:16,paddingTop:12,paddingLeft:15}}>热门推荐</p>
                    <img src='img/2.jpg' style={{height:'100%',width:'100%'}}/>
                </div>
            </div>
        )
    }
}
