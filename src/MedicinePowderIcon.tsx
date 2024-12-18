import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMedicinePowderIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.483 5.095a2 2 0 0 0-1.414 2.45l3.026 11.293a2 2 0 0 0 2.45 1.414l6.673-1.788a2 2 0 0 0 .928-.55 1 1 0 1 0 1.218-1.587l.53-.7a1 1 0 1 0 1.114-1.472l.944-1.247a2 2 0 0 0 .337-1.725l-2.063-7.7a2 2 0 0 0-2.45-1.414zM7.027 18.32l6.673-1.788 3.658-4.831L15.294 4 4 7.026z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M21.759 17.124a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18.759 19.124a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16.759 20.124a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18.759 23.124a1 1 0 1 0 0-2 1 1 0 0 0 0 2M22.759 20.124a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </Svg>
);
export default SvgMedicinePowderIcon;
