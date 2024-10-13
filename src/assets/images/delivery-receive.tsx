import React from 'react';
import {SvgXml} from 'react-native-svg';

export function DeliveryReceive({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  // Replace the 'stroke' color with the dynamic color passed as a prop
  const Svg = `
  <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3395_28890)">
<path d="M23.8581 35.9533C22.9378 35.735 22.3686 34.8119 22.5869 33.8916L24.5289 25.702C24.5627 25.5599 24.6145 25.4226 24.683 25.2935L28.1064 18.8526C28.5503 18.0173 29.5871 17.7001 30.4226 18.144C31.2578 18.588 31.575 19.6249 31.1311 20.4603L27.8111 26.7067L25.9197 34.682C25.7025 35.5979 24.7828 36.1725 23.8581 35.9533Z" fill="url(#paint0_linear_3395_28890)"/>
<path d="M35.3669 33.8053L33.1537 26.2534L34.701 18.7218L32.5019 8.70821C32.2652 7.63032 31.1994 6.94843 30.1215 7.1851L26.6411 7.94947C25.5632 8.18621 24.8813 9.25194 25.118 10.3298L27.3171 20.3434L31.0466 19.5243L29.7127 25.9785C29.656 26.2532 29.6675 26.5376 29.7464 26.8068L32.0797 34.7687C32.3456 35.6762 33.2967 36.1967 34.2049 35.9306C35.1127 35.6645 35.6329 34.713 35.3669 33.8053Z" fill="url(#paint1_linear_3395_28890)"/>
<path d="M28.683 25.0661L31.1311 20.4603C31.5751 19.6249 31.2577 18.588 30.4226 18.144C29.5872 17.7001 28.5503 18.0173 28.1063 18.8526L24.8038 25.0661L28.0677 26.2236L28.683 25.0661Z" fill="#3C5064"/>
<path d="M29.7699 25.7025H33.267L34.701 18.7218L32.502 8.70821C32.2652 7.63032 31.1996 6.94843 30.1217 7.1851L26.6412 7.94947C25.5633 8.18621 24.8814 9.25187 25.1181 10.3298L27.3172 20.3432L31.0467 19.5242L29.7699 25.7025Z" fill="#3C5A73"/>
<path d="M27.3172 20.3434L34.701 18.7218L32.502 8.70821C32.2652 7.63032 31.1996 6.94843 30.1217 7.1851L26.6412 7.94947C25.5633 8.18621 24.8814 9.25187 25.1181 10.3298L27.3172 20.3434Z" fill="url(#paint2_linear_3395_28890)"/>
<path d="M27.6034 6.77447C29.3456 6.77447 30.758 5.36212 30.758 3.6199C30.758 1.87768 29.3456 0.465332 27.6034 0.465332C25.8612 0.465332 24.4489 1.87768 24.4489 3.6199C24.4489 5.36212 25.8612 6.77447 27.6034 6.77447Z" fill="url(#paint3_linear_3395_28890)"/>
<path d="M13.7283 19.5422H22.6362C23.3068 19.5422 23.8505 18.9985 23.8505 18.3278V9.41993C23.8505 8.74929 23.3069 8.20557 22.6362 8.20557H13.7283C13.0576 8.20557 12.5139 8.74922 12.5139 9.41993V18.3278C12.5139 18.9985 13.0576 19.5422 13.7283 19.5422Z" fill="url(#paint4_linear_3395_28890)"/>
<path d="M16.4106 8.20557V13.1418L17.0012 12.5512L17.5917 13.1418L18.1822 12.5512L18.7727 13.1418L19.3632 12.5512L19.9537 13.1418V8.20557H16.4106Z" fill="#B48255"/>
<path d="M27.1746 3.96874H22.9453C22.4772 3.96874 22.0978 3.58933 22.0978 3.12133C22.0978 2.65333 22.4772 2.27393 22.9453 2.27393H27.1746C27.6426 2.27393 28.022 2.65333 28.022 3.12133C28.022 3.58933 27.6426 3.96874 27.1746 3.96874Z" fill="#3C5A73"/>
<path d="M29.2458 2.91991C29.2458 2.86726 29.2562 2.81513 29.2763 2.7665C29.2965 2.71786 29.326 2.67367 29.3632 2.63644C29.4004 2.59922 29.4446 2.56969 29.4933 2.54955C29.5419 2.52941 29.594 2.51905 29.6467 2.51906H30.5596C30.0211 1.06731 28.4824 0.196844 26.9269 0.538423C25.3345 0.888087 24.2897 2.38384 24.4683 3.9689H30.7377C30.7615 3.75656 30.7641 3.53964 30.7435 3.32076H29.6466C29.5403 3.32072 29.4384 3.27847 29.3632 3.20331C29.2881 3.12814 29.2459 3.0262 29.2458 2.91991Z" fill="url(#paint5_linear_3395_28890)"/>
<path d="M19.7933 15.7841L25.2508 15.9742C25.4717 15.9819 25.691 15.935 25.8892 15.8375C26.0875 15.74 26.2586 15.5951 26.3873 15.4155L30.081 10.109C30.5121 9.50746 30.3738 8.67039 29.7722 8.2393C29.1709 7.80786 28.3336 7.94652 27.9025 8.54811L24.52 13.2689L19.8877 13.1058C19.1481 13.0798 18.5274 13.6581 18.5013 14.3978C18.4753 15.1365 19.0531 15.7581 19.7933 15.7841Z" fill="url(#paint6_linear_3395_28890)"/>
<path d="M28.1845 12.8335L30.081 10.109C30.512 9.50742 30.3738 8.67035 29.7722 8.23927C29.1709 7.8079 28.3335 7.94649 27.9025 8.54808L25.931 11.2995L28.1845 12.8335Z" fill="#39AE96"/>
<path d="M2.94611 36.0001C3.89371 36.0001 4.66188 35.232 4.66188 34.2844V20.5703C4.66188 19.6227 3.89371 18.8545 2.94611 18.8545C1.99851 18.8545 1.23035 19.6227 1.23035 20.5703V34.2844C1.23042 35.232 1.99858 36.0001 2.94611 36.0001Z" fill="#343E6B"/>
<path d="M7.08796 36.0001C8.03556 36.0001 8.80372 35.232 8.80372 34.2844V20.5703C8.80372 19.6227 8.03556 18.8545 7.08796 18.8545C6.14036 18.8545 5.37219 19.6227 5.37219 20.5703V34.2844C5.37226 35.232 6.14043 36.0001 7.08796 36.0001Z" fill="#414B82"/>
<path d="M8.80376 20.5703H1.23047V9.06292C1.23047 7.83463 2.22623 6.83887 3.45452 6.83887H6.57977C7.80806 6.83887 8.80383 7.83463 8.80383 9.06292L8.80376 20.5703Z" fill="url(#paint7_linear_3395_28890)"/>
<path d="M5.01766 5.92594C6.65406 5.92594 7.98063 4.59937 7.98063 2.96297C7.98063 1.32657 6.65406 0 5.01766 0C3.38125 0 2.05469 1.32657 2.05469 2.96297C2.05469 4.59937 3.38125 5.92594 5.01766 5.92594Z" fill="url(#paint8_linear_3395_28890)"/>
<path d="M8.09511 13.9306L3.67892 9.95087C3.05187 9.38577 3.00167 8.4194 3.5667 7.79235C4.1318 7.1653 5.09818 7.11503 5.72522 7.68013L9.59086 11.1638L13.8665 10.4321C14.6986 10.2896 15.4885 10.8488 15.6308 11.6808C15.7732 12.5128 15.2142 13.3027 14.3821 13.4451L9.37599 14.3017C9.14832 14.3407 8.91478 14.3276 8.69293 14.2633C8.47107 14.199 8.26668 14.0853 8.09511 13.9306Z" fill="url(#paint9_linear_3395_28890)"/>
<path d="M8.76573 10.4201L5.72534 7.68013C5.0983 7.11503 4.13185 7.1653 3.56682 7.79235C3.00179 8.4194 3.05199 9.38584 3.67904 9.95087L6.79648 12.7602L8.76573 10.4201Z" fill="#78BEFF"/>
</g>
<defs>
<linearGradient id="paint0_linear_3395_28890" x1="26.936" y1="17.9434" x2="26.936" y2="35.9999" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFB69E"/>
<stop offset="1" stop-color="#D5A99B"/>
</linearGradient>
<linearGradient id="paint1_linear_3395_28890" x1="30.2537" y1="7.13818" x2="30.2537" y2="36.0002" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFB69E"/>
<stop offset="1" stop-color="#D5A99B"/>
</linearGradient>
<linearGradient id="paint2_linear_3395_28890" x1="29.8861" y1="7.13818" x2="29.8861" y2="20.3434" gradientUnits="userSpaceOnUse">
<stop stop-color="#1C9585"/>
<stop offset="1" stop-color="#4F7570"/>
</linearGradient>
<linearGradient id="paint3_linear_3395_28890" x1="27.6034" y1="0.465332" x2="27.6034" y2="6.77447" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFB69E"/>
<stop offset="1" stop-color="#D5A99B"/>
</linearGradient>
<linearGradient id="paint4_linear_3395_28890" x1="12.5139" y1="8.20557" x2="23.8505" y2="8.20557" gradientUnits="userSpaceOnUse">
<stop stop-color="#CC8241"/>
<stop offset="1" stop-color="#DEA861"/>
</linearGradient>
<linearGradient id="paint5_linear_3395_28890" x1="27.6029" y1="0.464355" x2="27.6029" y2="3.9689" gradientUnits="userSpaceOnUse">
<stop stop-color="#1C9585"/>
<stop offset="1" stop-color="#4F7570"/>
</linearGradient>
<linearGradient id="paint6_linear_3395_28890" x1="24.4162" y1="7.98828" x2="24.4162" y2="15.975" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFB69E"/>
<stop offset="1" stop-color="#D5A99B"/>
</linearGradient>
<linearGradient id="paint7_linear_3395_28890" x1="5.01715" y1="6.83887" x2="5.01715" y2="20.5703" gradientUnits="userSpaceOnUse">
<stop stop-color="#64AFFF"/>
<stop offset="1" stop-color="#78A5D5"/>
</linearGradient>
<linearGradient id="paint8_linear_3395_28890" x1="5.01766" y1="0" x2="5.01766" y2="5.92594" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFB69E"/>
<stop offset="1" stop-color="#D5A99B"/>
</linearGradient>
<linearGradient id="paint9_linear_3395_28890" x1="9.41332" y1="7.28711" x2="9.41332" y2="14.3236" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFB69E"/>
<stop offset="1" stop-color="#D5A99B"/>
</linearGradient>
<clipPath id="clip0_3395_28890">
<rect width="36" height="36" fill="white" transform="translate(0.333374)"/>
</clipPath>
</defs>
</svg>
`;

  return <SvgXml xml={Svg} width={width} height={height} />;
}
