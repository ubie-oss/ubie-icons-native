import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgConditionBad1Icon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M8.293 16.207a1 1 0 0 1 0-1.414L9 15.5l-.707-.707.001-.002.002-.001.003-.003.008-.008.02-.02.061-.055q.075-.064.2-.16c.167-.126.405-.284.715-.438.622-.312 1.524-.606 2.697-.606s2.075.294 2.697.606a4.7 4.7 0 0 1 .716.438 3 3 0 0 1 .26.215l.02.02.008.008.003.003.002.002L15 15.5l.706-.708a1 1 0 0 1-1.403 1.425l-.008-.007-.082-.066a2.7 2.7 0 0 0-.41-.25c-.378-.188-.976-.394-1.803-.394s-1.425.206-1.803.394a2.7 2.7 0 0 0-.492.316l-.008.007a1 1 0 0 1-1.404-.01M10.5 10.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M14.75 11.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgConditionBad1Icon;
