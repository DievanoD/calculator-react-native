import { StyleSheet, _View } from "react-native";

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#000',
        margin: 1,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        margin: 1,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    btnText: {
        fontSize: 35
    }
});

export default styles;