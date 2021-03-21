import { StyleSheet, _View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#F0F0F0'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        // borderWidth: 1,
        // borderColor: '#000'
    },
    titleText: {
        fontSize: 26
    },
    display: {
        marginVertical: 10,
        // marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5
    },
    countText: {
        fontSize: 22,
        color: 'gray',
        textAlign: 'right'
    },
    resultText: {
        fontSize: 55,
        textAlign: 'right'
    },
    containerBtn: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginVertical: 0,
        // marginHorizontal: 10,
    },
    flatlist: {
        // borderWidth: 1,
        // borderColor: '#000',
        width: _View,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        // borderWidth: 1,
        // borderColor: '#000'
    },
    footerText: {
        fontSize: 20,
        color: '#999696'
    }
});

export default styles;