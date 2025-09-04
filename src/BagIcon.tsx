import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgBagIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 2h6a1 1 0 0 1 1 1v5h2.857a1 1 0 0 1 .985.824l2.142 12A1 1 0 0 1 21 22H3a1 1 0 0 1-.984-1.176l2.142-12A1 1 0 0 1 5.143 8H8V3a1 1 0 0 1 1-1m1 2v4h4V4zm0 6h4v3a1 1 0 1 0 2 0v-3h2.02l1.786 10H4.194L5.98 10H8v3a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBagIcon;
