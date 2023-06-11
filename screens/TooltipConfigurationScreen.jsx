import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';
import { defaultConfig } from '../data/defaultConfig';
import { buttons } from '../data/buttons';
import { positions } from '../data/positions';
import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function TooltipConfigurationScreen({ navigation }) {
    const [targetElement, setTargetElement] = useState('');
    const [tooltipPosition, setTooltipPosition] = useState('');
    const [tooltipText, setTooltipText] = useState('');
    const [textSize, setTextSize] = useState('');
    const [padding, setPadding] = useState('');
    const [textColor, setTextColor] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');
    const [cornerRadius, setCornerRadius] = useState('');
    const [tooltipWidth, setTooltipWidth] = useState('');
    const [arrowWidth, setArrowWidth] = useState('');
    const [arrowHeight, setArrowHeight] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageName, setImageName] = useState(null)

    const [tooltipConfigurations, setTooltipConfigurations] = useState(defaultConfig);

    const distributeDataToInputField = button => {
        setTargetElement(button);
        setTooltipPosition(tooltipConfigurations[button].tooltipPosition);
        setTooltipText(tooltipConfigurations[button].tooltipText);
        setTextSize(tooltipConfigurations[button].textSize + '');
        setPadding(tooltipConfigurations[button].padding + '');
        setTextColor(tooltipConfigurations[button].textColor);
        setBackgroundColor(tooltipConfigurations[button].backgroundColor);
        setCornerRadius(tooltipConfigurations[button].cornerRadius + '');
        setTooltipWidth(tooltipConfigurations[button].tooltipWidth + '');
        setArrowWidth(tooltipConfigurations[button].arrowWidth + '');
        setArrowHeight(tooltipConfigurations[button].arrowHeight + '');
        setSelectedImage(tooltipConfigurations[button].selectedImage);
        setImageName(tooltipConfigurations[button].imageName)

    }

    const handleConfigurationChange = button => {
        setTooltipConfigurations((prevConfigurations) => ({
            ...prevConfigurations,
            [button]: {
                tooltipPosition,
                tooltipText,
                textSize,
                padding,
                textColor,
                backgroundColor,
                cornerRadius,
                tooltipWidth,
                arrowWidth,
                arrowHeight,
                selectedImage,
                imageName
            },
        }));
    };

    const navigateToSecondScreen = () => {
        navigation.navigate('ButtonsScreen', {
            tooltipConfigurations
        });
    };

    const selectImage = async () => {
        try {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (permissionResult.granted === false) {
                alert('Permission to access camera roll is required!');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled) {
                setSelectedImage(result.assets[0].uri);
                setImageName(result.assets[0].fileName);
            }
        } catch (error) {
            console.log('Error while picking an image:', error);
        }
    };

    const disSelectImage = () => {
        setSelectedImage(null);
        setImageName(null)
    }

    return (
        <View style={styles.container}>
            {/* UI elements for TooltipConfiguration screen */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Tooltip Element */}
                <Text style={styles.label}>Target Element</Text>
                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={buttons}
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder="Select Button"
                    value={targetElement}
                    onChange={item => {
                        distributeDataToInputField(item.value);
                        console.log('Selected Button', item);
                    }}
                    textError="Error"
                />

                {/* Tooltip Position */}
                <Text style={styles.label}>Position</Text>
                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={positions}
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder="Select Position"
                    value={tooltipPosition}
                    onChange={item => {
                        setTooltipPosition(item.value);
                        console.log('Selected Position', item);
                    }}
                    textError="Error"
                />

                {/* Tooltip Text */}
                <Text style={styles.label}>Tooltip Text</Text>
                <TextInput
                    style={styles.input}
                    value={tooltipText}
                    onChangeText={(text) => setTooltipText(text)}
                />

                <View style={{ flexDirection: 'row' }}>
                    {/* Text Size */}
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>Text Size</Text>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={textSize}
                            onChangeText={(size) => setTextSize(size)}
                        />
                    </View>
                    <View style={{ width: 50 }} />
                    {/* Padding */}
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>Padding</Text>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={padding}
                            onChangeText={(padding) => setPadding(padding)}
                        />
                    </View>
                </View>

                {/* Text Color */}
                <Text style={styles.label}>Text Color</Text>
                <TextInput
                    style={styles.input}
                    value={textColor}
                    onChangeText={(color) => setTextColor(color.toLocaleLowerCase())}
                />

                {/* Background Color */}
                <Text style={styles.label}>Background Color</Text>
                <TextInput
                    style={styles.input}
                    value={backgroundColor}
                    onChangeText={(color) => setBackgroundColor(color.toLocaleLowerCase())}
                />

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    {/* Corner Radius */}
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>Corner Radius</Text>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={cornerRadius}
                            onChangeText={(radius) => setCornerRadius(radius)}
                        />
                    </View>
                    <View style={{ width: 50 }} />
                    {/* Tooltip Width */}
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>Tooltip Width</Text>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={tooltipWidth}
                            onChangeText={(width) => setTooltipWidth(width)}
                        />
                    </View>
                </View>


                <View style={{ flexDirection: 'row', }}>
                    {/* Arrow Width */}
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>Arrow Width</Text>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={arrowWidth}
                            onChangeText={(width) => setArrowWidth(width)}
                        />
                    </View>
                    <View style={{ width: 50 }} />
                    {/* Arrow Height */}
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>Arrow Height</Text>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={arrowHeight}
                            onChangeText={(height) => setArrowHeight(height)}
                        />
                    </View>
                </View>

                {/* Selecting Image */}
                <Text style={styles.label}>Tooltip Image</Text>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity style={styles.input} title='Select Image' onPress={() => {
                        selectImage()
                    }}>
                        <Text>Select Image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 4,
                            padding: 8,
                            marginBottom: 16,
                            backgroundColor: 'white',
                            marginLeft: 10
                        }}
                        onPress={() => disSelectImage()}
                    >
                        <MaterialCommunityIcons name="delete-outline" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                {imageName && <Text>{imageName}</Text>}


                <View>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => {
                            targetElement != ''
                                ? handleConfigurationChange(targetElement)
                                : Alert.alert('Please select a target element')
                        }}
                    >
                        <Text style={styles.buttonText}>Save Configuration</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={navigateToSecondScreen} >
                        <Text style={styles.buttonText}>Render Tooltip</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </View>
    );
}

export default TooltipConfigurationScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 20

    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        backgroundColor: 'white'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    dropdown: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 0.5,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginBottom: 16,
    },
    buttonContainer: {
        height: 40,
        backgroundColor: '#0958D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});