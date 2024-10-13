import React from 'react';
import {SvgXml} from 'react-native-svg';

export function EmptySvg({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  const EmptySvg = `<svg width="250" height="244" viewBox="0 0 250 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3392_25589)">
<path d="M158.71 54.8746H91.3461C89.811 54.8765 88.3393 55.487 87.2538 56.5724C86.1684 57.6577 85.5577 59.1292 85.5558 60.6641V210.362L84.7838 210.598L68.2583 215.658C67.4751 215.897 66.6292 215.815 65.9062 215.431C65.1832 215.047 64.6423 214.391 64.4021 213.609L15.2463 53.0644C15.007 52.2813 15.0886 51.4353 15.4729 50.7122C15.8573 49.9892 16.513 49.4484 17.296 49.2086L42.7618 41.412L116.588 18.8173L142.054 11.0207C142.441 10.9014 142.848 10.8598 143.252 10.8981C143.656 10.9364 144.048 11.0539 144.406 11.2439C144.764 11.4339 145.081 11.6927 145.34 12.0054C145.598 12.3181 145.791 12.6786 145.91 13.0663L158.475 54.1026L158.71 54.8746Z" fill="#F4ECFF"/>
<path d="M173.409 54.1022L158.266 4.64399C158.014 3.81993 157.602 3.05358 157.054 2.38874C156.506 1.72389 155.832 1.17359 155.071 0.769273C154.309 0.364953 153.476 0.114537 152.618 0.0323456C151.76 -0.0498462 150.895 0.0377962 150.071 0.290256L114.267 11.2479L40.4452 33.8465L4.64196 44.808C2.97873 45.3187 1.58609 46.4683 0.76971 48.0046C-0.0466663 49.5408 -0.220076 51.3382 0.287552 53.0022L52.045 222.03C52.4574 223.373 53.2895 224.549 54.4191 225.384C55.5488 226.22 56.9166 226.672 58.3218 226.673C58.9722 226.673 59.6189 226.576 60.2402 226.384L84.7833 218.873L85.5554 218.633V217.827L84.7833 218.062L60.0125 225.646C58.5444 226.094 56.9587 225.941 55.6033 225.221C54.2479 224.501 53.2334 223.273 52.7824 221.806L1.02887 52.7744C0.805396 52.0476 0.727511 51.2839 0.799668 50.5269C0.871825 49.77 1.0926 49.0347 1.44937 48.3632C1.80613 47.6916 2.29188 47.0971 2.87879 46.6136C3.46569 46.13 4.14222 45.767 4.86964 45.5452L40.6729 34.5837L114.495 11.989L150.299 1.02747C150.85 0.859105 151.424 0.773261 152.001 0.772724C153.239 0.775503 154.443 1.17458 155.438 1.9115C156.433 2.64842 157.166 3.68446 157.529 4.86786L172.603 54.1022L172.842 54.8741H173.645L173.409 54.1022Z" fill="url(#paint0_linear_3392_25589)"/>
<path d="M47.3572 49.3347C46.6132 49.3342 45.8889 49.0953 45.2907 48.653C44.6924 48.2108 44.2517 47.5885 44.0331 46.8774L39.061 30.639C38.9274 30.2028 38.881 29.7445 38.9245 29.2904C38.9681 28.8363 39.1006 28.3952 39.3147 27.9924C39.5287 27.5895 39.8201 27.2327 40.172 26.9424C40.524 26.6522 40.9297 26.434 41.366 26.3006L109.282 5.51077C110.163 5.24196 111.115 5.33364 111.928 5.76569C112.742 6.19774 113.35 6.93487 113.621 7.81528L118.593 24.0539C118.862 24.9348 118.77 25.8864 118.338 26.6997C117.906 27.5131 117.169 28.1219 116.288 28.3925L48.3722 49.1823C48.0433 49.2832 47.7012 49.3346 47.3572 49.3347Z" fill="url(#paint1_linear_3392_25589)"/>
<path d="M73.4029 17.3509C77.6667 17.3509 81.1233 13.8948 81.1233 9.63151C81.1233 5.3682 77.6667 1.91211 73.4029 1.91211C69.139 1.91211 65.6825 5.3682 65.6825 9.63151C65.6825 13.8948 69.139 17.3509 73.4029 17.3509Z" fill="url(#paint2_linear_3392_25589)"/>
<path d="M73.4029 14.52C76.1029 14.52 78.2917 12.3315 78.2917 9.63181C78.2917 6.93216 76.1029 4.74365 73.4029 4.74365C70.7029 4.74365 68.5141 6.93216 68.5141 9.63181C68.5141 12.3315 70.7029 14.52 73.4029 14.52Z" fill="white"/>
<path d="M232.629 224.702H102.155C101.285 224.701 100.451 224.355 99.8357 223.74C99.2206 223.124 98.8746 222.291 98.8736 221.421V65.103C98.8746 64.2332 99.2206 63.3993 99.8357 62.7842C100.451 62.1692 101.285 61.8232 102.155 61.8223H232.629C233.499 61.8233 234.333 62.1692 234.948 62.7843C235.563 63.3993 235.909 64.2332 235.91 65.103V221.421C235.909 222.291 235.563 223.124 234.948 223.739C234.333 224.355 233.499 224.701 232.629 224.702Z" fill="#EAE2F5"/>
<path d="M172.603 54.103H91.3461C89.6065 54.1055 87.9387 54.7976 86.7086 56.0276C85.4785 57.2575 84.7863 58.9251 84.7838 60.6645V218.063L85.5559 217.828V60.6645C85.5577 59.1296 86.1684 57.6581 87.2539 56.5727C88.3393 55.4874 89.811 54.8768 91.3461 54.875H172.843L172.603 54.103ZM243.438 54.103H91.3461C89.6065 54.1055 87.9387 54.7976 86.7086 56.0276C85.4785 57.2575 84.7863 58.9251 84.7838 60.6645V237.439C84.7863 239.178 85.4785 240.846 86.7086 242.076C87.9387 243.306 89.6065 243.998 91.3461 244H243.438C245.177 243.998 246.845 243.306 248.075 242.076C249.305 240.846 249.998 239.178 250 237.439V60.6645C249.998 58.9251 249.305 57.2575 248.075 56.0276C246.845 54.7976 245.177 54.1055 243.438 54.103ZM249.228 237.439C249.226 238.974 248.615 240.445 247.53 241.53C246.445 242.616 244.973 243.226 243.438 243.228H91.3461C89.811 243.226 88.3393 242.616 87.2539 241.53C86.1684 240.445 85.5577 238.974 85.5559 237.439V60.6645C85.5577 59.1296 86.1684 57.6581 87.2539 56.5727C88.3393 55.4874 89.811 54.8768 91.3461 54.875H243.438C244.973 54.8768 246.445 55.4874 247.53 56.5727C248.615 57.6581 249.226 59.1296 249.228 60.6645V237.439Z" fill="url(#paint3_linear_3392_25589)"/>
<path d="M202.906 71.0854H131.878C130.957 71.0844 130.074 70.7181 129.423 70.0668C128.771 69.4156 128.405 68.5326 128.404 67.6117V50.629C128.405 49.708 128.771 48.8251 129.423 48.1739C130.074 47.5226 130.957 47.1563 131.878 47.1553H202.906C203.827 47.1563 204.71 47.5226 205.361 48.1739C206.013 48.8251 206.379 49.708 206.38 50.629V67.6117C206.379 68.5326 206.013 69.4156 205.361 70.0668C204.71 70.7181 203.827 71.0844 202.906 71.0854Z" fill="url(#paint4_linear_3392_25589)"/>
<path d="M167.392 48.3133C171.656 48.3133 175.112 44.8572 175.112 40.5939C175.112 36.3306 171.656 32.8745 167.392 32.8745C163.128 32.8745 159.672 36.3306 159.672 40.5939C159.672 44.8572 163.128 48.3133 167.392 48.3133Z" fill="url(#paint5_linear_3392_25589)"/>
<path d="M167.392 45.2958C169.989 45.2958 172.094 43.1907 172.094 40.5939C172.094 37.9972 169.989 35.8921 167.392 35.8921C164.795 35.8921 162.689 37.9972 162.689 40.5939C162.689 43.1907 164.795 45.2958 167.392 45.2958Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_3392_25589" x1="173.645" y1="226.673" x2="-39.8138" y2="179.261" gradientUnits="userSpaceOnUse">
<stop stop-color="#7210FF"/>
<stop offset="1" stop-color="#9D59FF"/>
</linearGradient>
<linearGradient id="paint1_linear_3392_25589" x1="118.744" y1="49.3347" x2="38.1042" y2="6.88772" gradientUnits="userSpaceOnUse">
<stop stop-color="#7210FF"/>
<stop offset="1" stop-color="#9D59FF"/>
</linearGradient>
<linearGradient id="paint2_linear_3392_25589" x1="81.1233" y1="17.3509" x2="62.7505" y2="12.0232" gradientUnits="userSpaceOnUse">
<stop stop-color="#7210FF"/>
<stop offset="1" stop-color="#9D59FF"/>
</linearGradient>
<linearGradient id="paint3_linear_3392_25589" x1="250" y1="244" x2="49.6311" y2="193.456" gradientUnits="userSpaceOnUse">
<stop stop-color="#7210FF"/>
<stop offset="1" stop-color="#9D59FF"/>
</linearGradient>
<linearGradient id="paint4_linear_3392_25589" x1="206.38" y1="71.0854" x2="153.233" y2="20.8743" gradientUnits="userSpaceOnUse">
<stop stop-color="#7210FF"/>
<stop offset="1" stop-color="#9D59FF"/>
</linearGradient>
<linearGradient id="paint5_linear_3392_25589" x1="175.112" y1="48.3133" x2="156.74" y2="42.9856" gradientUnits="userSpaceOnUse">
<stop stop-color="#7210FF"/>
<stop offset="1" stop-color="#9D59FF"/>
</linearGradient>
<clipPath id="clip0_3392_25589">
<rect width="250" height="244" fill="white"/>
</clipPath>
</defs>
</svg>
`;
  const Svg = () => (
    <SvgXml xml={EmptySvg} width={width} height={height} color={color} />
  );

  return <Svg />;
}