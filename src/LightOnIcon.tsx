import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgLightOnIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zM19.414 5.707l-.707.707A1 1 0 1 1 17.293 5L18 4.293a1 1 0 1 1 1.414 1.414M4.293 4.293a1 1 0 0 1 1.414 0L6.414 5A1 1 0 1 1 5 6.414l-.707-.707a1 1 0 0 1 0-1.414"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.5 18a1 1 0 0 0 .5.866V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1.134a1 1 0 0 0 .5-.866c0-.21-.004-.385-.007-.54-.006-.292-.011-.51.014-.74.03-.28.097-.41.2-.513.56-.559 1.018-1.158 1.332-1.863.315-.71.461-1.477.461-2.344 0-2.402-1.809-5.5-5.5-5.5S6.5 9.598 6.5 12c0 .867.146 1.634.461 2.344.314.705.773 1.304 1.332 1.863.103.103.17.233.2.514.025.228.02.447.014.738-.003.156-.007.332-.007.541M12 8.5c-2.309 0-3.5 1.902-3.5 3.5 0 .633.104 1.116.289 1.531.186.42.477.82.918 1.262.53.53.713 1.15.774 1.71.017.158.026.327.029.497h2.98c.003-.17.012-.34.029-.496.061-.562.245-1.182.774-1.711.44-.441.732-.842.918-1.262.185-.415.289-.898.289-1.531 0-1.598-1.191-3.5-3.5-3.5M11 20v-1h2v1z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M3 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM19 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"
    />
  </Svg>
);
export default SvgLightOnIcon;
