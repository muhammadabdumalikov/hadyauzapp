import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function DeleteIconSvg({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  // Replace the 'stroke' color with the dynamic color passed as a prop
  const DeleteIconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8891 9.55371C18.8891 17.5728 20.0434 21.1975 12.2796 21.1975C4.51484 21.1975 5.69294 17.5728 5.69294 9.55371" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.3651 6.47912H4.21466" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7148 6.47958C15.7148 6.47958 16.2434 2.71387 12.2891 2.71387C8.33578 2.71387 8.86435 6.47958 8.86435 6.47958" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={DeleteIconSvg} width={width} height={height} />;
}
