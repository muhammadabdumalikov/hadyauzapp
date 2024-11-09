import { SvgXml } from 'react-native-svg';

export function InviteFriends({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  const Xml = `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9725 17.8681C7.73349 17.8681 4.96649 17.3781 4.96649 15.4161C4.96649 13.4541 7.71549 11.7461 10.9725 11.7461C14.2115 11.7461 16.9785 13.4381 16.9785 15.3991C16.9785 17.3601 14.2295 17.8681 10.9725 17.8681Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9725 8.949C13.0985 8.949 14.8225 7.226 14.8225 5.1C14.8225 2.974 13.0985 1.25 10.9725 1.25C8.84651 1.25 7.12251 2.974 7.12251 5.1C7.11651 7.218 8.82651 8.942 10.9455 8.949H10.9725Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3622 7.89105C18.5992 7.56005 19.5112 6.43205 19.5112 5.08905C19.5112 3.68805 18.5182 2.51805 17.1962 2.24805" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9432 11.0449C19.6972 11.0449 21.1952 12.2339 21.1952 13.2959C21.1952 13.9209 20.6782 14.6019 19.8942 14.7859" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.58384 7.89105C3.34584 7.56005 2.43384 6.43205 2.43384 5.08905C2.43384 3.68805 3.42784 2.51805 4.74884 2.24805" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00182 11.0449C2.24782 11.0449 0.749817 12.2339 0.749817 13.2959C0.749817 13.9209 1.26682 14.6019 2.05182 14.7859" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml= { Xml } width = { width } height = { height } color = { color } />
  );

  return <Svg />;
}
