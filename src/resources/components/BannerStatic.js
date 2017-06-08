import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

class BannerStatic extends Component  {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <TouchableOpacity onPress = {this.props.onPress}>
            <View style = {this.props.style}>
                <Image
                    style = {{width: this.props.width, height: this.props.height}}
                    source = {{uri: this.props.imageUrl}} />
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = {

}

module.exports = BannerStatic
