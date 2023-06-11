import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Tooltip = ({ tooltipConfigurations }) => {
    const position = tooltipConfigurations.tooltipPosition
    const tooltipPosition = getPositionStyle(position);
    return (
        <View style={[styles.tooltipContainer, tooltipPosition.container]}>
            <View style={[styles.arrow, tooltipPosition.arrow]} />
            <View style={{...styles.tooltipBox, padding: Number(tooltipConfigurations.padding), backgroundColor: tooltipConfigurations.backgroundColor, width: Number(tooltipConfigurations.tooltipWidth)}}>
                <Text style={{...styles.tooltipText, color: tooltipConfigurations.textColor, fontSize: Number(tooltipConfigurations.textSize)}}>{tooltipConfigurations.tooltipText}</Text>
                {tooltipConfigurations.selectedImage && <Image style={{ width: 100, height: 100 }} source={{ uri: tooltipConfigurations.selectedImage }} resizeMode="contain" /> }
            </View>
        </View>
    );
};

const getPositionStyle = (position) => {
    switch (position) {
        case 'top':
            return {
                container: styles.tooltipContainerTop,
                arrow: styles.arrowBottom,
            };
        case 'left':
            return {
                container: styles.tooltipContainerLeft,
                arrow: styles.arrowRight,
            };
        case 'right':
            return {
                container: styles.tooltipContainerRight,
                arrow: styles.arrowLeft,
            };
        case 'bottom':
        default:
            return {
                container: styles.tooltipContainerBottom,
                arrow: styles.arrowTop,
            };
    }
};

const styles = StyleSheet.create({
    tooltipContainer: {
        position: 'absolute',
        padding: 8,
        borderRadius: 4,
        zIndex: 9999,
    },
    tooltipContainerTop: {
        bottom: '100%',
        alignItems: 'center',
    },
    tooltipContainerBottom: {
        top: '100%',
        alignItems: 'center',
    },
    tooltipContainerLeft: {
        right: '100%',
        justifyContent: 'center',
    },
    tooltipContainerRight: {
        left: '100%',
        justifyContent: 'center',
    },
    tooltipText: {
        color: '#000',
        fontSize: 12,

    },
    tooltipBox:{
        width: 100,
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 5,
    },
    arrow: {
        position: 'absolute',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 6,
    },
    arrowTop: {
        borderBottomColor: 'rgba(0, 0, 0, 0.8)',
        borderBottomWidth: 6,
        top: '-12%',
    },
    arrowBottom: {
        borderTopColor: 'rgba(0, 0, 0, 0.8)',
        borderTopWidth: 6,
        bottom: '-12%',
    },
    arrowLeft: {
        borderRightColor: 'rgba(0, 0, 0, 0.8)',
        borderRightWidth: 10,
        left: '-6%',
    },
    arrowRight: {
        borderLeftColor: 'rgba(0, 0, 0, 0.8)',
        borderLeftWidth: 10,
        right: '-6%',
    },
});

export default Tooltip;
