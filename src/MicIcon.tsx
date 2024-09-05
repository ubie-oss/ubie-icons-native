import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMicIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 6a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0zm6 0v6a2 2 0 1 1-4 0V6a2 2 0 1 1 4 0"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M7 12a1 1 0 1 0-2 0 7 7 0 0 0 6 6.93V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-1.07A7 7 0 0 0 19 12a1 1 0 1 0-2 0 5 5 0 0 1-10 0"
    />
  </Svg>
);
export default SvgMicIcon;
