import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgThumbDownOutlineIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="m15.952 15.928.778-.83a1 1 0 0 0 .27-.684V4a1 1 0 0 0-1-1H7.332c-1.375 0-2.342.52-3.011 1.347-.586.724-.906 1.648-1.159 2.378l-.024.071c-.285.82-.565 1.814-.776 2.74C2.158 10.438 2 11.359 2 12c0 .86.436 1.626.984 2.153.55.529 1.33.93 2.183.93h3.471l-.117.309c-.35.93-.773 2.065-1.05 2.86-.37 1.071-.181 2.214.405 2.962.298.38.754.72 1.343.777.613.06 1.163-.202 1.582-.624.528-.533 2.018-2.107 3.36-3.534.675-.716 1.317-1.4 1.79-1.905m-6.59 2.98c-.154.443-.062.827.05 1.018.533-.539 1.967-2.055 3.293-3.464.674-.715 1.315-1.398 1.788-1.902l.507-.541v-9.02H7.333c-.79 0-1.178.262-1.457.606-.343.424-.563 1.024-.848 1.847a25 25 0 0 0-.714 2.527c-.201.885-.314 1.62-.314 2.02 0 .182.105.457.37.712.262.252.567.372.797.372h4.924a1 1 0 0 1 .933 1.36l-.933-.36.933.36-.05.128-.135.352-.447 1.176c-.35.929-.765 2.041-1.03 2.808"
      clipRule="evenodd"
    />
    <Path fill="currentColor" d="M21 15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1z" />
  </Svg>
);
export default SvgThumbDownOutlineIcon;
