import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">SocialPet</Text>
    </SafeAreaView>
  );
}
