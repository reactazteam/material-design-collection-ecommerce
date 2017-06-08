'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View, StyleSheet, Dimensions, Image, Text, TouchableOpacity
} from 'react-native'

import Line from './../../components/Line'

import colors from './../../styles/colors'

const { width } = Dimensions.get('window')
const itemWidth = (width - 45) / 2
const itemHeight = itemWidth * 2 / 3

class GridCategoryThumb extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={ styles.holder }>
                <Image style={ styles.image } source={{ uri: this.props.imageUri }} />
                <View style={ styles.nameHolder }>
                    <Text style={ styles.name } ellipsizeMode='tail' numberOfLines={2}>
                        { this.props.name }
                    </Text>
                </View>
                <Line />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        width: itemWidth,
        height: itemHeight + 65,
        marginBottom: 5,
    },
    image: {
        width: itemWidth,
        height: itemHeight,
        resizeMode: 'center',
        borderRadius: 10
    },
    nameHolder: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        height: 40,
        marginBottom: 5
    },
    name: {
        color: colors.txt_description,
        fontSize: 16,
        alignItems: 'center'
    }
})

module.exports = GridCategoryThumb
