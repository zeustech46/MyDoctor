import {TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack, IconBackLight} from '../../../assets';

export default function iconOnly({onPress, icon}) {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBack />;
    }
    if (icon === 'back-light') {
      return <IconBackLight />;
    }
    return <IconBack />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({});
