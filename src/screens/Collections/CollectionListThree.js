'use strict'
import React, { Component } from 'react'
import {
    View, ScrollView, StyleSheet, ListView
} from 'react-native'

import Container from './../../resources/components/Container'
import CollectionThumbThree from './../../resources/components/collection/CollectionThumbThree'

import Icon from 'react-native-vector-icons/FontAwesome'
import collections from './../../data/collections'
import colors from './../../resources/styles/colors'

import Utils from './../../resources/helpers/Utils'

import Header from './../../resources/components/Header'

class CollectionListThree extends Component {
    static navigationOptions = {
        drawerLabel: 'Collection List',
        drawerIcon: ({ tintColor }) => (
            <Icon style={styles.icon} name='th-large' size={16}/>
        ),
    };

    constructor(props) {
        super(props)
    }

    _renderList(data) {
        return (
            <View style={{ }}>
                {
                    data.map((item, idx) => {
                       return <CollectionThumbThree key={ idx } { ...item } onPress={() => this.onPressCollection()}/>
                    })
                }
            </View>
        )
    }

    onPressCollection(){
        Utils.showMessage('You clicked on a collection')
    }

    render() {
        return (
            <Container>
                <Header navigation={this.props.navigation} title="List Collection"/>
                <ScrollView>
                    { this._renderList(collections.data) }
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.bg_header
    },
    headerSub: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        width: 64,
        height: 28,
        resizeMode: 'center'
    },
    icoSearch: {
        color: colors.txt_description,
        marginRight: 5
    },
    btnSearchHolder: {
        padding: 15,
        paddingTop: 0
    },
    btnSearch: {
        borderColor: colors.bd_input,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 8,
        backgroundColor: colors.bg1,
        borderWidth: 1,
        borderRadius: 5
    },
    btnSearchTitle: {
        color: colors.txt_description,
        fontSize: 16
    },
    btnDeals: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 0.5
    },
    icoDeals: {
        color: colors.txt_description,
        marginRight: 10
    },
    section_title:{
        fontSize: 18,
        fontWeight: '600',
        padding: 20
    }
})

module.exports = CollectionListThree
