import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFingerRightIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 10a1 1 0 0 0-1-1h-7a1 1 0 0 1-1-1c0-.393-.083-.628-.18-.75-.065-.08-.24-.25-.82-.25-.117 0-.342.044-.69.195a8 8 0 0 0-1.134.635c-.83.543-1.71 1.258-2.447 1.916a1 1 0 0 1-.666.254H4v6h1a1 1 0 0 1 .6.2c.872.654 1.948 1.11 2.973 1.4 1.028.293 1.935.4 2.427.4.298 0 .781-.218 1.24-.882.441-.637.76-1.561.76-2.618V12a1 1 0 0 1 1-1h5a1 1 0 0 0 1-1m-1-3a3 3 0 1 1 0 6h-4v1.5c0 1.443-.431 2.769-1.115 3.757C13.219 19.218 12.202 20 11 20c-.709 0-1.801-.143-2.973-.476-1.08-.306-2.285-.79-3.349-1.524H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h.685c.721-.627 1.565-1.3 2.396-1.844.472-.309.959-.589 1.431-.794C8.971 5.162 9.488 5 10 5c1.02 0 1.845.33 2.38 1 .25.312.404.657.497 1z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFingerRightIcon;
