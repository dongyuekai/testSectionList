/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    SectionList,
} from 'react-native';

export default class testSectionList extends Component {
    constructor(props) {
        super(props);
    }

    _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        return <Text
            style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 25 ,paddingTop:20}}>{txt}</Text>
    }

    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30,paddingTop:5 }}>{txt}</Text>
    }


    render() {
        var sections = [
            {key: "A", data: [{title: "atm"}, {title: "amn"}, {title: "add"}]},
            {key: "B", data: [{title: "bg"}, {title: "bb"}, {title: "bd"}, {title: "bj"}, {title: "bs"}]},
            {key: "C", data: [{title: "cjsh"}, {title: "cskd"}]},
            {
                key: "W",
                data: [{title: "wl"}, {title: "wzry"}, {title: "wsbnhw"}, {title: "wxl"}, {title: "wzl"}, {title: "wdl"}]
            },
        ];

        return (
            <View style={{flex: 1}}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={sections}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    ListHeaderComponent={() => <View
                        style={{backgroundColor: '#25B960', alignItems: 'center', height: 30}}><Text
                        style={{fontSize: 18, color: '#ffffff',paddingTop:5}}>通讯录</Text></View>}
                    ListFooterComponent={() => <View
                        style={{backgroundColor: '#25B960', alignItems: 'center', height: 30}}><Text
                        style={{fontSize: 18, color: '#ffffff',paddingTop:5}}>通讯录尾部</Text></View>}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('testSectionList', () => testSectionList);
