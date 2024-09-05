import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFingerLeftIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 10a1 1 0 0 1 1-1h7a1 1 0 0 0 1-1c0-.393.083-.628.18-.75.065-.08.24-.25.82-.25.117 0 .342.044.69.195a8 8 0 0 1 1.134.635c.83.543 1.71 1.258 2.447 1.916a1 1 0 0 0 .666.254H20v6h-1a1 1 0 0 0-.6.2c-.872.654-1.948 1.11-2.973 1.4-1.028.293-1.935.4-2.427.4-.298 0-.781-.218-1.24-.882-.441-.637-.76-1.561-.76-2.618V12a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1m1-3a3 3 0 0 0 0 6h4v1.5c0 1.443.431 2.769 1.115 3.757C10.781 19.218 11.798 20 13 20c.709 0 1.801-.143 2.973-.476 1.08-.306 2.285-.79 3.349-1.524H20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.685c-.721-.627-1.565-1.3-2.396-1.844a10 10 0 0 0-1.431-.794C15.029 5.162 14.512 5 14 5c-1.02 0-1.845.33-2.38 1-.25.312-.404.657-.497 1z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFingerLeftIcon;
