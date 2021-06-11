import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#000'
    },
    contentBody: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#d3d3d3'
    },
    logo: {
        width: 128,
        height: 128
    },
    h1: {
        fontSize: 26
    },
    h2: {
        fontSize: 20
    },
    h3: {
        fontSize: 18
    },
    textBold: {
        fontWeight: 'bold'
    },
    textCenter: {
        textAlign: 'center',
    },
    textJustify: {
        textAlign: 'justify'
    },
    textMuted: {
        color: '#8a8a8a'
    },
    redColor: {
        color: '#c41212'
    },
    orangeColor: {
        color: '#FCA438'
    },
    my1: {
        marginVertical: 10
    }
});

export default styles;