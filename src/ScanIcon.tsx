import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgScanIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M3 3a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H5v4a1 1 0 0 1-2 0zM21 3a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0zM3.293 21.707A1 1 0 0 1 3 21v-5a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2H4a1 1 0 0 1-.707-.293M21 21a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0zM2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
    />
  </Svg>
);
export default SvgScanIcon;
