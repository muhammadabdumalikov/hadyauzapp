import {ViewProps} from 'react-native';
import React from 'react';
import {View} from '../Themed';
import LinearGradient from 'react-native-linear-gradient';

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
  const fromColor = props?.from || '#7210FF';
  const toColor = props?.to || '#9D59FF';

  return props.disable ? (
    <View {...props} />
  ) : (
    <LinearGradient colors={[fromColor, toColor]} style={props.style}>
      {props.children}
    </LinearGradient>
  );
}
