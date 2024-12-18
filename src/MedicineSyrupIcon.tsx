import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMedicineSyrupIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3a3 3 0 0 1 3 3v3h3.5a2 2 0 0 1 1.993 2.166l-.5 6A2 2 0 0 1 20 23h-6a2 2 0 0 1-1.732-1H4a2 2 0 0 1-2-2V10a3 3 0 0 1 3-3zm7 0v3H7V4zM5 9h9a1 1 0 0 1 1 1v1H4v-1a1 1 0 0 1 1-1m-1 4v1.5h3.25a.75.75 0 0 0 0-1.5zm0 3.5V18h3.25a.75.75 0 0 0 0-1.5zM20 21l.5-6h-7l.5 6z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMedicineSyrupIcon;
