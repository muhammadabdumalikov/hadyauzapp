import {SvgXml} from 'react-native-svg';

export function ProfileMenuCredentialIcon({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  const Xml = `<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4709 7.90335V5.75435C13.4399 3.23535 11.3719 1.21935 8.85391 1.25035C6.38691 1.28135 4.39191 3.26735 4.34991 5.73435V7.90335" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.91028 12.6562V14.8772" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.91031 7.32422C3.16531 7.32422 1.25031 8.89222 1.25031 13.5952C1.25031 18.2992 3.16531 19.8672 8.91031 19.8672C14.6553 19.8672 16.5713 18.2992 16.5713 13.5952C16.5713 8.89222 14.6553 7.32422 8.91031 7.32422Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}
