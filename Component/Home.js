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
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入json数据
var LocalData = require('../LocalData.json');

var Home = React.createClass({
    getDefaultProps(){
        return{
            url_api: "http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&size=20&version=8.1&spever=false&net=wifi&lat=5OtqEKiivwW4K%2BGMt6DBdA%3D%3D&lon=jKlRVyYkSNti2wwsjGQHrw%3D%3D&ts=1463384311&sign=TtD7IZllDljVzBs2E4sa9fQyKTKF021w2EUC6qx1gEN48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore",
            key_word: 'T1348647853363'
        }
    },


    //初始化方法
    getInitialState(){
        return{
            //头部的数据源
            headerDataAyy:[],
            //var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            // cell的数据源
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    },

    //网络请求
    componentDidMount(){
        //AlertIOS.alert('11111');
        this.loadDataFromNet();
    },

    loadDataFromNet(){
        fetch(this.props.url_api)
            .then((response) => response.json())
            .then((responseData) => {
                //拿到所有数据
                //alert(responseData+" aaaa");

                var jsonData = responseData[this.props.key_word];
                alert('nihao'+jsonData);
                this.dealWithData(jsonData);
            })
            .catch((error) =>{
                if(error){
                    var jsonData = LocalData[this.props.key_word];
                    this.dealWithData(jsonData);
                }
            })


    },

    dealWithData(jsonData){
        //拿到所有数据
        //alert("01");
        var headerArr = [], listDataArr = [];
        //遍历json数据
        for(var i=0; i<jsonData.length;i++){
            var data = jsonData[i];
            if(data.hasAD ==1){ //有广告数据
                headerArr = data.ads;
            }else{ // cell数据
                listDataArr.push(data);
            }
        }
        alert(listDataArr.length + "总数");
        //更新状态机
        this.setState({
            headerDataAyy:headerArr,
            //var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            // cell的数据源

            dataSource: this.state.dataSource.cloneWithRows(listDataArr)
        });
    },

    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow = {this.renderRow}
                />
        );
    },

    renderRow(rowData){
        return(
          <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.cellViewStyle}>
                  <Image source={{uri:rowData.imgsrc}} style={styles.imageStyle}/>

                  <View>
                      <Text style={styles.titleStyle}>{rowData.title}</Text>
                      <Text style={styles.subTitleStyle}>{rowData.digest}</Text>
                      <Text style={styles.flowTitleStyle}>{rowData.replyCount}跟帖</Text>
                  </View>
              </View>

          </TouchableOpacity>
        );
    }

});

const styles = StyleSheet.create({
    cellViewStyle:{

    },

    imageStyle:{
        width:90,
        height:90
    },
    titleStyle:{

    },
    subTitleStyle:{

    },
    flowTitleStyle:{

    }
});

//输出类
module.exports = Home;