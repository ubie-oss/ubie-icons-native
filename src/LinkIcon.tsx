import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgLinkIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.657 9.343a1 1 0 0 1 1.414 1.414l-1.414 1.415a4 4 0 0 0 5.657 5.656l1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.415a6 6 0 0 1-8.485-8.486zm10.607 3.536a1 1 0 0 0 1.414 1.414l1.414-1.414a6 6 0 1 0-8.485-8.486L9.193 5.808a1 1 0 0 0 1.414 1.414l1.414-1.414a4 4 0 1 1 5.657 5.656zm-7.071 0a1 1 0 0 0 1.414 1.414l3.535-3.536a1 1 0 0 0-1.414-1.414z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLinkIcon;
