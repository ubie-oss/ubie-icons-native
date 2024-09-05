import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMicMuteIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 9.414 2.293 3.707a1 1 0 0 1 1.414-1.414l18 18a1 1 0 0 1-1.414 1.414l-4.1-4.1A6.97 6.97 0 0 1 13 18.928V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.07A7 7 0 0 1 5 12a1 1 0 1 1 2 0 5 5 0 0 0 7.757 4.172l-.725-.726A4 4 0 0 1 8 12zm4.518 4.518A2 2 0 0 1 10 12v-.586z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M14 6v4.586l1.963 1.963q.036-.27.037-.549V6a4 4 0 0 0-7.81-1.224L10 6.586V6a2 2 0 1 1 4 0M16.804 13.39l1.55 1.55c.415-.894.646-1.89.646-2.94a1 1 0 1 0-2 0c0 .482-.068.949-.196 1.39"
    />
  </Svg>
);
export default SvgMicMuteIcon;
