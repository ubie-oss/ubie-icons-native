import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFemaleHumanIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10 10.842l-2.136 3.662a1 1 0 0 1-1.728-1.008l3.5-6A1 1 0 0 1 10.5 7h3a1 1 0 0 1 .864.496l3.5 6a1 1 0 1 1-1.728 1.008L14 10.842v1.04l2.447 4.894A.5.5 0 0 1 16 17.5h-1.5V21a1 1 0 1 1-2 0v-3.5h-1V21a1 1 0 1 1-2 0v-3.5H8a.5.5 0 0 1-.447-.724L10 11.882z"
    />
  </Svg>
);
export default SvgFemaleHumanIcon;
