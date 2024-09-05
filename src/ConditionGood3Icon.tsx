import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgConditionGood3Icon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.001 14.047q.01.21.098.388c.55 1.229 1.249 2.135 2.106 2.73.872.606 1.83.835 2.795.835s1.923-.23 2.796-.835c.862-.599 1.563-1.513 2.116-2.753l.026-.065a1 1 0 0 0-.03-.768 1 1 0 0 0-.93-.579H8.023a1 1 0 0 0-.79.36A1 1 0 0 0 7 14v.003zM14.23 15H9.771c.191.22.384.39.575.522.477.332 1.019.478 1.654.478.636 0 1.177-.146 1.655-.478.19-.132.383-.303.574-.522"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M9.185 10.39a1 1 0 0 0 1.705-1.046c-.296-.48-.67-.857-1.135-1.09a2.55 2.55 0 0 0-1.386-.248 2.55 2.55 0 0 0-1.323.485c-.417.31-.72.746-.927 1.27a1 1 0 1 0 1.86.735c.1-.255.203-.357.262-.402a.56.56 0 0 1 .302-.096.56.56 0 0 1 .314.043c.067.033.185.116.328.35M17.318 11.059a1 1 0 0 1-1.297-.563c-.101-.255-.203-.357-.263-.402a.56.56 0 0 0-.302-.096.56.56 0 0 0-.314.043c-.066.033-.184.116-.328.35a1 1 0 1 1-1.704-1.047c.295-.48.669-.857 1.134-1.09a2.55 2.55 0 0 1 1.387-.248c.44.038.904.173 1.322.485.418.31.72.746.928 1.27a1 1 0 0 1-.563 1.298"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgConditionGood3Icon;
