/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

//引入外部组件
var Home = require('../Component/Home');
var Message = require('../Component/Message');
var Find = require('../Component/Find');
var Me = require('../Component/Me');

var Main = React.createClass({
    //初始化方法
    getInitialState(){
        return{
            //设置选中标识
            selectedItemTag:"home"  //默认首页被选中

        }
    },

    render(){
        return(
            <TabBarIOS tintColor = "orange">
                {/*首页*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_home')}
                    title = "首页"
                    selected={this.state.selectedItemTag == 'home'}
                    onPress={()=>{this.setState({selectedItemTag:"home"})}}
                    >
                    <NavigatorIOS
                        style = {{flex:1}}
                        initialRoute={
                            {
                                component:Home,
                                title: '首页',
                                leftButtonIcon: require('image!navigationbar_friendattention'),
                                rightButtonIcon: require('image!navigationbar_pop'),

                            }

                        }
                    />
                </TabBarIOS.Item>
                {/*消息*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_message_center')}
                    title = "消息"
                    selected={this.state.selectedItemTag == 'message'}
                    onPress={()=>{this.setState({selectedItemTag:"message"})}}
                    >
                    <NavigatorIOS
                        style = {{flex:1}}
                        initialRoute={
                            {
                                component:Message,
                                title: '消息',
                            }

                        }
                    />
                </TabBarIOS.Item>
                {/*发现*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_discover')}
                    title = "发现"
                    selected={this.state.selectedItemTag == 'find'}
                    onPress={()=>{this.setState({selectedItemTag:"find"})}}
                    >
                    <NavigatorIOS
                        style = {{flex:1}}
                        initialRoute={
                            {
                                component:Find,
                                title: '发现',
                            }

                        }
                    />
                </TabBarIOS.Item>
                {/*我的*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_profile')}
                    title = "我的"
                    selected={this.state.selectedItemTag == 'me'}
                    onPress={()=>{this.setState({selectedItemTag:"me"})}}
                    >
                    <NavigatorIOS
                        style = {{flex:1}}
                        initialRoute={
                            {
                                component:Message,
                                title: '我的',
                            }

                        }
                    />
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
});

//输出类
module.exports = Main;