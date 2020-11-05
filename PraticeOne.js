import React, { useState } from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';

const PraticeOne = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    if (loading == true) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={loading} color={'red'} />
      <Button title="Start Loading" onPress={startLoading}></Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  buttonStyle: {
    alignSelf: "stretch",
    padding: 10,
    fontSize: 20,
    color: "green"
  },
});

export default PraticeOne;