import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgRangeSelectionIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 3a1 1 0 0 1 1-1h1v2H2zm3.6-1h2v2h-2zm3.6 0h2v2h-2zm3.6 0h2v2h-2zm3.6 0h2v2h-2zM20 2h1a1 1 0 0 1 1 1v1h-2zm2 3.6v2h-2v-2zm-20 2v-2h2v2zm0 3.6v-2h2v2zm20-2v2h-2v-2zM2 14.8v-2h2v2zm20-2v2h-2v-2zM2 18.4v-2h2v2zm20-2v2h-2v-2zM2 21v-1h2v2H3a1 1 0 0 1-1-1m5.6 1h-2v-2h2zm3.6 0h-2v-2h2zm3.6 0h-2v-2h2zm3.6 0h-2v-2h2zm1.6-2h2v1a1 1 0 0 1-1 1h-1z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRangeSelectionIcon;
