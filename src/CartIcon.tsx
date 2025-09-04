import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgCartIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 2a1 1 0 0 0 0 2h2.258l.78 2.571 1.882 7.247-1.745 2.617a1 1 0 0 0-.065 1.021 1 1 0 0 0 .904.544H18a1 1 0 1 0 0-2H8.868l.667-1H19a1 1 0 0 0 .968-.748l2-7.7A1 1 0 0 0 21 5.3H7.742l-.781-2.578a1 1 0 0 0-.343-.508A1 1 0 0 0 6 2zm6.774 11-1.48-5.7h11.413l-1.48 5.7z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M7.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </Svg>
);
export default SvgCartIcon;
