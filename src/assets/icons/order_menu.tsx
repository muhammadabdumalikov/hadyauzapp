import React from "react";
import { SvgXml } from "react-native-svg";

export function OrderMenuIconInactive({ width, height, color }: { width?: any, height?: any, color?: string }) {
  const Xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.75012 3.25L4.83012 3.61L5.79312 15.083C5.87012 16.02 6.65312 16.739 7.59312 16.736H18.5021C19.3991 16.738 20.1601 16.078 20.2871 15.19L21.2361 8.632C21.3421 7.899 20.8331 7.219 20.1011 7.113C20.0371 7.104 5.16412 7.099 5.16412 7.099" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1251 10.7949H16.8981" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.15441 20.2026C7.45541 20.2026 7.69841 20.4466 7.69841 20.7466C7.69841 21.0476 7.45541 21.2916 7.15441 21.2916C6.85341 21.2916 6.61041 21.0476 6.61041 20.7466C6.61041 20.4466 6.85341 20.2026 7.15441 20.2026Z" fill="#9E9E9E" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4347 20.2026C18.7357 20.2026 18.9797 20.4466 18.9797 20.7466C18.9797 21.0476 18.7357 21.2916 18.4347 21.2916C18.1337 21.2916 17.8907 21.0476 17.8907 20.7466C17.8907 20.4466 18.1337 20.2026 18.4347 20.2026Z" fill="#9E9E9E" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}

export function OrderMenuIcon({ width, height, color }: { width?: any, height?: any, color?: string }) {
  const Xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1213 9.23312H14.8891C15.3088 9.23312 15.6386 8.88615 15.6386 8.46774C15.6386 8.03912 15.3088 7.70236 14.8891 7.70236H12.1213C11.7016 7.70236 11.3719 8.03912 11.3719 8.46774C11.3719 8.88615 11.7016 9.23312 12.1213 9.23312ZM18.1766 3.92749C18.7861 3.92749 19.1858 4.1418 19.5855 4.61123C19.9852 5.08067 20.0551 5.7542 19.9652 6.36549L19.0159 13.06C18.8361 14.3469 17.7569 15.2949 16.4879 15.2949H5.58639C4.25742 15.2949 3.15828 14.255 3.04837 12.908L2.12908 1.7834L0.620259 1.51807C0.22057 1.44664 -0.0592117 1.04864 0.0107338 0.640433C0.0806793 0.223045 0.470376 -0.0535127 0.880056 0.0087383L3.2632 0.375101C3.60293 0.437352 3.85274 0.722074 3.88272 1.06905L4.07257 3.35499C4.10254 3.68257 4.36234 3.92749 4.68209 3.92749H18.1766ZM5.42631 16.9079C4.58697 16.9079 3.9075 17.6018 3.9075 18.459C3.9075 19.3061 4.58697 20 5.42631 20C6.25567 20 6.93514 19.3061 6.93514 18.459C6.93514 17.6018 6.25567 16.9079 5.42631 16.9079ZM16.6676 16.9079C15.8282 16.9079 15.1487 17.6018 15.1487 18.459C15.1487 19.3061 15.8282 20 16.6676 20C17.4969 20 18.1764 19.3061 18.1764 18.459C18.1764 17.6018 17.4969 16.9079 16.6676 16.9079Z" fill="url(#paint0_linear_5872_4477)"/>
<defs>
<linearGradient id="paint0_linear_5872_4477" x1="20" y1="20" x2="-3.7982" y2="13.0999" gradientUnits="userSpaceOnUse">
<stop stop-color="#7210FF"/>
<stop offset="1" stop-color="#9D59FF"/>
</linearGradient>
</defs>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}