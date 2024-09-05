import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgWomanIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M10 12.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15.25 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 12c0-1.111.181-2.18.516-3.18a1 1 0 0 1 .105-.298A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm10 8a8 8 0 0 0 7.748-10.001c-2.193-.018-3.758-.278-5.167-.814-1.2-.458-2.249-1.104-3.424-1.88-1.443 1.458-2.903 2.163-4.238 2.48-1.021.243-1.975.252-2.672.235A8 8 0 0 0 12 20m-6.001 0A10 10 0 0 1 4 18.001V20zM20 18.001V20h-1.999A10 10 0 0 0 20 18.001M15.294 7.316c.956.364 2.053.592 3.623.662A8 8 0 0 0 12 4a8 8 0 0 0-6.941 4.02c.43-.014.891-.06 1.397-.18 1.104-.263 2.42-.9 3.785-2.49a1 1 0 0 1 1.314-.182c1.52 1.014 2.55 1.695 3.739 2.148"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWomanIcon;
