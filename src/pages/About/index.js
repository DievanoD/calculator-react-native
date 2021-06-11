import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../styles/about';

const About = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentBody}>
        <Image style={styles.logo} source={require('../../assets/logo-1.png')} />
        <Text style={[styles.h1, { marginBottom: 10 }]}>RN-Calc</Text>
        <Text style={[styles.h2, styles.textCenter, styles.textMuted]}>
          App calculadora com funções básicas em React Native. Desenvolvido para aprender os conceitos
          iniciais das tecnologias empregadas.
        </Text>
        <Text style={[styles.h3, { marginTop: 20 }]}>Última atualização: <Text style={[styles.redColor]}>23/03/2021</Text></Text>
        <Text style={[styles.h3]}>Versão: <Text style={[styles.redColor]}>1.1.0</Text></Text>
      </View>
    </View>
  );
}

export default About;

// export default class About extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Sobre</Text>
//       </View>
//     );
//   }
// }