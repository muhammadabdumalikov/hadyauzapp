import {SvgXml} from 'react-native-svg';

export function ProfileMenuInformationIcon({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  const Xml = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2502 10.5C19.2502 17.437 16.9372 19.75 10.0002 19.75C3.06318 19.75 0.750183 17.437 0.750183 10.5C0.750183 3.563 3.06318 1.25 10.0002 1.25C16.9372 1.25 19.2502 3.563 19.2502 10.5Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0002 14.3945V10.4995" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0045 7H9.9955" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}
