import {SvgXml} from 'react-native-svg';

export function PersonIcon({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  const Xml = `<svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.84455 20.1613C4.15273 20.1613 1 19.5868 1 17.2861C1 14.9853 4.13273 12.8613 7.84455 12.8613C11.5364 12.8613 14.6891 14.9647 14.6891 17.2655C14.6891 19.5653 11.5564 20.1613 7.84455 20.1613Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.83731 9.67403C10.26 9.67403 12.2237 7.71039 12.2237 5.28766C12.2237 2.86494 10.26 0.900391 7.83731 0.900391C5.41458 0.900391 3.45004 2.86494 3.45004 5.28766C3.44186 7.70221 5.39186 9.66585 7.8064 9.67403C7.81731 9.67403 7.82731 9.67403 7.83731 9.67403Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}
