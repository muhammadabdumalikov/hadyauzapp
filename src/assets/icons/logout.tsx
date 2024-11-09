import {SvgXml} from 'react-native-svg';

export function LogoutIcon({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  const Xml = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.791 10.6211H8.75" stroke="#F75555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8643 7.70508L20.7923 10.6211L17.8643 13.5371" stroke="#F75555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3598 6.13C15.0298 2.55 13.6898 1.25 8.3598 1.25C1.2588 1.25 1.2588 3.56 1.2588 10.5C1.2588 17.44 1.2588 19.75 8.3598 19.75C13.6898 19.75 15.0298 18.45 15.3598 14.87" stroke="#F75555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}
