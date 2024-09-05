import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgCalendarIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M8 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0M16 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 2a1 1 0 0 0-1 1v1H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V3a1 1 0 1 0-2 0v1H9V3a1 1 0 0 0-1-1m7 5V6H9v1a1 1 0 0 1-2 0V6H5v3h14V6h-2v1a1 1 0 1 1-2 0m4 13v-9H5v9z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCalendarIcon;
