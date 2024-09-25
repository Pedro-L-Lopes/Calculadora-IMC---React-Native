import { View, StyleSheet } from "react-native";
import Form from './components/Form';
import Title from './components/title';
export default function App(){
  return (
    <View style={styles.container}>
    <Title/>
    <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#12E08E'
  }
})