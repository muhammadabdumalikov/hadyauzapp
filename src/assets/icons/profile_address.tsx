import {SvgXml} from 'react-native-svg';

export function ProfileMenuAddressIcon({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  const Xml = `<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5102 9.21145C11.5102 7.83017 10.391 6.71094 9.00969 6.71094C7.62943 6.71094 6.51019 7.83017 6.51019 9.21145C6.51019 10.5917 7.62943 11.7109 9.00969 11.7109C10.391 11.7109 11.5102 10.5917 11.5102 9.21145Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99951 19.5C6.10148 19.5 1.5 14.4587 1.5 9.09864C1.5 4.90246 4.8571 1.5 8.99951 1.5C13.1419 1.5 16.5 4.90246 16.5 9.09864C16.5 14.4587 11.8985 19.5 8.99951 19.5Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}
