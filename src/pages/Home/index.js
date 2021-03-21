import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import TouchableOpacityComponent from '../../components/TouchableOpacity';

import styles from '../../styles/home';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            t1: 0,
            op: 'null',
            result: 0
        };
    }

    clickBtn = (value) => {
        const { result } = this.state;
        let num = 0;
        if (!this.isOperation(value)) {
            // if (value === ',') value = '.';
            (result === 0) ? num = value : num = `${result}${value}`;
            this.setState({ result: num });
        } else {
            this.operationFunc(value);
        }
    }

    isOperation = (value) => {
        const operations = ['C', '<', '/', 'x', '-', '+', '='];
        return operations.find(o => o === value);
    }

    operationFunc = (value) => {
        const { result } = this.state;
        switch (value) {
            case 'C':
                this.setState({ count: 0, result: 0 });
                break;
            case '<':
                let n = result.toString();
                n = n.substring(0, n.length - 1);
                if (n.length <= 0) n = 0;
                this.setState({ result: n });
                break;
            case '+':
                let n2 = `${result}+`;
                this.setState({ count: n2, t1: result, op: '+', result: 0 });
                break;
            case '-':
                let n3 = `${result}-`;
                this.setState({ count: n3, t1: result, op: '-', result: 0 });
                break;
            case 'x':
                let n4 = `${result}x`;
                this.setState({ count: n4, t1: result, op: 'x', result: 0 });
                break;
            case '/':
                let n5 = `${result}/`;
                this.setState({ count: n5, t1: result, op: '/', result: 0 });
                break;
            case '=':
                this.setState({ count: `${this.state.count}${result}`, result: this.calculate(this.state.op) });
                break;
            default:
                break;
        }
    }

    calculate = (opr) => {
        const { t1, op, result } = this.state;
        const value1 = parseFloat(this.replaceComma(t1));
        const value2 = parseFloat(this.replaceComma(result));
        let rs = 0;
        switch (opr) {
            case '+':
                console.log(value1, value2, op);
                rs = value1 + value2;
                break;
            case '-':
                console.log(value1, value2, op);
                rs = value1 - value2;
                break;
            case 'x':
                console.log(value1, value2, op);
                rs = value1 * value2;
                break;
            case '/':
                console.log(value1, value2, op);
                rs = value1 / value2;
                break;
            default:
                break;
        }
        return rs;
    }

    replaceComma = (num) => {
        let rs;
        if (num.toString().indexOf(',') !== -1) {
            rs = num.replace(',', '.');
        } else {
            rs = num;
        }
        return rs;
    }

    render() {
        const renderItem = ({ item }) => (
            <TouchableOpacityComponent title={item.key} clickBtn={() => this.clickBtn(item.key)} />
        );

        const DATA = [
            { key: '' },
            { key: '' },
            { key: 'C' },
            { key: '<' },
            { key: '7' },
            { key: '8' },
            { key: '9' },
            { key: '/' },
            { key: '4' },
            { key: '5' },
            { key: '6' },
            { key: 'x' },
            { key: '1' },
            { key: '2' },
            { key: '3' },
            { key: '-' },
            { key: ',' },
            { key: '0' },
            { key: '=' },
            { key: '+' },
        ];

        const { count, result } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Calculadora React</Text>
                </View>
                {/* ## DISPLAY ## */}
                <View style={styles.display}>
                    <Text style={styles.countText}>{count}</Text>
                    <Text style={styles.resultText}>{result}</Text>
                </View>

                {/* ## BUTTONS */}
                <View style={styles.containerBtn}>
                    <FlatList data={DATA} numColumns={4} renderItem={renderItem} keyExtractor={item => item.key} style={styles.flatlist} />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Version 1.0</Text>
                </View>
            </View>
        );
    }
}
