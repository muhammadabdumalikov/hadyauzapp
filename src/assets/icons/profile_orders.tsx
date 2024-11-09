import {SvgXml} from 'react-native-svg';

export function ProfileMenuOrdersIcon({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  const Xml = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7499 7.9724V4.9404C13.7549 2.8524 12.0659 1.1554 9.97793 1.1504C7.88893 1.1464 6.19293 2.8354 6.18793 4.9234V7.9724" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.950012 12.7074C0.950012 7.41344 3.20501 5.64844 9.96901 5.64844C16.733 5.64844 18.988 7.41344 18.988 12.7074C18.988 18.0004 16.733 19.7654 9.96901 19.7654C3.20501 19.7654 0.950012 18.0004 0.950012 12.7074Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}
