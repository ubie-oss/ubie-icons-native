import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgMedicineInjectionFormIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 4.5a2 2 0 0 0 2 2h1v1h-3.25v-1a.75.75 0 0 0-1.5 0v1H4a1 1 0 0 0 0 2h6.25v1a.75.75 0 0 0 1.5 0v-1H15v1a4 4 0 0 0-4 4v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a4 4 0 0 0-4-4v-4h1a2 2 0 0 0 2-2 3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3m5-1a1 1 0 0 1 1 1h-4a1 1 0 0 1 1-1zm-2 9a2 2 0 0 0-2 2v6h6v-6a2 2 0 0 0-2-2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMedicineInjectionFormIcon;
