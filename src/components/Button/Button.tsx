import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: colors.buttonPrimary,
      }}>
      <Text preset="paragraphMedium" bold style={{color: '#FFFFFF'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
