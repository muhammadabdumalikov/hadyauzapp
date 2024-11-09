import {SvgXml} from 'react-native-svg';

export function ProfileMenuSecurityIcon({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  const Xml = `<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.98451 20.105C11.3195 20.105 16.6565 17.783 16.6565 11.378C16.6565 4.974 16.9345 4.473 16.3195 3.857C15.7035 3.241 12.4935 1.25 8.98451 1.25C5.47551 1.25 2.26551 3.241 1.65051 3.857C1.03451 4.473 1.31251 4.974 1.31251 11.378C1.31251 17.783 6.65051 20.105 8.98451 20.105Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.38593 10.3741L8.27793 12.2691L12.1759 8.36914" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}
