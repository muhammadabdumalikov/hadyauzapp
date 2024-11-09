import {SvgXml} from 'react-native-svg';

export function ProfileMenuPaymentMethodsIcon({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  const Xml = `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1711 12.1755H16.2845C14.8692 12.1755 13.7216 11.0279 13.7216 9.61169C13.7216 8.19645 14.8692 7.04883 16.2845 7.04883H20.1407" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.722 9.55432H16.4248" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.6062 5.64416H10.6662" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.71411 9.75389C1.71411 3.34913 4.03887 1.21484 11.0151 1.21484C17.9903 1.21484 20.3151 3.34913 20.3151 9.75389C20.3151 16.1577 17.9903 18.2929 11.0151 18.2929C4.03887 18.2929 1.71411 16.1577 1.71411 9.75389Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}
