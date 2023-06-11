import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button';

function ButtonsScreen({ route }) {
    const { tooltipConfigurations } = route.params;

    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [showTooltipFor, setShowTooltipFor] = useState('');

    const handleButtonPress = (button) => {
        setTooltipVisible(true);
        setTimeout(() => {
            setTooltipVisible(false);
        }, 3000);
    };

    return (
        <View style={styles.container}>
            {/* UI elements for second screen */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Button text="Button 1" onPress={() => {
                        handleButtonPress('button1')
                        setShowTooltipFor('button1')
                    }}
                    />
                    { (tooltipVisible && showTooltipFor === "button1") && <Tooltip tooltipConfigurations={tooltipConfigurations['button1']} />}
                </View>

                <View>
                    <Button text="Button 2" onPress={() => {
                        handleButtonPress('button2')
                        setShowTooltipFor('button2')
                    }}
                    />
                    {(tooltipVisible && showTooltipFor === "button2") && <Tooltip tooltipConfigurations={tooltipConfigurations['button2']} />}
                </View>
            </View>
            <View style={{alignSelf:'center', width:105 }}>
            <Button text="Button 3" onPress={() => {
                handleButtonPress('button3')
                setShowTooltipFor('button3')
            }}
            />
            {(tooltipVisible && showTooltipFor === "button3") && <Tooltip tooltipConfigurations={tooltipConfigurations['button3']} />}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Button text="Button 4" onPress={() => {
                        handleButtonPress('button4')
                        setShowTooltipFor('button4')
                    }}
                    />
                    {(tooltipVisible &&  showTooltipFor === "button4") && <Tooltip tooltipConfigurations={tooltipConfigurations['button4']} />}
                </View>

                <View>
                    <Button text="Button 5" onPress={() => {
                        handleButtonPress('button5')
                        setShowTooltipFor('button5')
                    }}
                    />
                    {(tooltipVisible && showTooltipFor === "button5") && <Tooltip tooltipConfigurations={tooltipConfigurations['button5']} />}
                </View>
            </View>
        </View>
    );
}

export default ButtonsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#00000040',
        padding: 20
    },
})
