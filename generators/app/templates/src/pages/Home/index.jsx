import React, {Component} from 'react';
import { Layout, Breadcrumb, Alert, Row, Col, Button } from 'antd';
import Slider from '../../components/Slider';
import Header from '../../components/Header';
import './index.less';

const { Content } = Layout;

const openRequestedPopup = () => {
    var windowObjectReference = window.open(
        "http://0.0.0.0:8082/coordinatesEdit",
        "map",
        "resizable,scrollbars,status,height=600,width=800"
    );
    var parentData = {type: 'passDataBack', data: 'passData'};  
        setTimeout(function(){
            windowObjectReference.postMessage(parentData, 'http://0.0.0.0:8082/coordinatesEdit')  
        },2000);
    
    /* var parentData = {type: 'passDataBack', data: 'passData'};
    window.postMessage(parentData, 'http://0.0.0.0:8082/coordinatesEdit')  */
}

export default class Index extends Component {
    componentDidMount() {
        window.addEventListener("message", function(event) {        
            console.log(event, event.data);    
        }, false);
    }

    sendPost = () => {
        // openRequestedPopup();
        var iframeWin = document.getElementById("otherPage").contentWindow;   
        var parentData = {type: 'passDataBack', data: 'passData'};   
        var  transfer = {test: 'lx'}
        iframeWin.postMessage(parentData, 'http://0.0.0.0:8082/coordinatesEdit')  
        window.addEventListener("message", function(event) {        
            console.log(event, event.data);    
        }, false);
        
    }
    
    render(){
        return(
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>契约配置管理系统</Breadcrumb.Item>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                </Breadcrumb>
                <Row className="homePage-name">
                    <Col>首页</Col>
                </Row>
                <Row className="homepage-info">
                    <Alert message="欢迎来到契约配置管理系统" type="info" showIcon/>
                </Row>
                <Row className="homePage-name">
                    <Col>使用QA</Col>
                </Row>
                <Row className="homepage-info">
                    <Col span={6}><a href="javascript:void(0);">如何配置模板</a></Col>
                    <Col span={6}><a href="javascript:void(0);">如何配置模板</a></Col>
                    <Col span={6}><a href="javascript:void(0);">如何配置模板</a></Col>
                    <Col span={6}><a href="javascript:void(0);">如何配置模板</a></Col>
                </Row>
                {/* 测试 postmessage */}
                <Row>
                    <Button onClick={this.sendPost}>点击</Button>
                    <iframe src="http://0.0.0.0:8082/coordinatesEdit" id="otherPage" style={{height: 1000, width: 1000}}>
                    </iframe>
                </Row>
            </div>
        )
    }
}

