import React from 'react';
import {Text, Pressable} from 'react-native';
import {styles} from './styles';

interface IProps {
  label: string;
  onPress: () => void;
}

const CommonButton: React.FC<IProps> = ({label, onPress}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};

export default CommonButton;
