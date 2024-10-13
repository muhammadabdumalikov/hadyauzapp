import {ViewProps} from 'react-native';
import React from 'react';
import {View} from '../Themed';
import {LinearGradient} from 'react-native-svg';

interface LinearWrapperProps extends ViewProps {
  children?: React.ReactNode;
}

export function LinearWrapper(
  props: LinearWrapperProps & {
    from?: string;
    to?: string;
    disable?: boolean;
  },
) {
  const fromColor = props.from || '#7210FF';
  const toColor = props.from || '#9D59FF';

  return props.disable ? (
    <View {...props} />
  ) : (
    <LinearGradient
      colors={[fromColor, toColor]}
      {...props}
      style={props.style}>
      {props.children}
    </LinearGradient>
  );
}
