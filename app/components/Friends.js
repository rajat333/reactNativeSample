import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';


export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>
             Add friends here!
        Add friends here!
        </Text>
        {
          this.props.screenProps.possibleFriends.map((friend, index) => (
            
            <View style = { styles.buttonContainer } >
            <Button 
              key={ index }
              title={ `Add ${ friend }` }
              onPress={() =>
                this.props.screenProps.addFriend(index)
              }
            />
            {/* <Text> { friend } </Text> */}
             </View>
          )
        )
        }
        <View style ={ styles.buttonContainer } >
        <Button 
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 5
  },
});