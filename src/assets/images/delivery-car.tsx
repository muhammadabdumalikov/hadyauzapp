import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function DeliveryCar({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  // Replace the 'stroke' color with the dynamic color passed as a prop
  const Svg = `<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 28.96H28V0.96H0V28.96Z" fill="black"/>
</svg>`;

  return <SvgXml xml={Svg} width={width} height={height} />;
}
