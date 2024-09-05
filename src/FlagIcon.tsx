import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgFlagIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.307 3.279c.337-.329.846-.561 1.337-.725a9.5 9.5 0 0 1 1.934-.405 12.6 12.6 0 0 1 5.232.542c1.75.57 3.77.818 5.605.838 1.839.02 3.394-.19 4.25-.471a1 1 0 0 1 .533-.038 1 1 0 0 1 .68.5 1 1 0 0 1 .122.503v9.954a1 1 0 0 1-.71.98c-1.118.369-2.935.686-4.926.713-2.006.029-4.29-.235-6.27-1.115a6.37 6.37 0 0 0-4.2-.352A6.3 6.3 0 0 0 4 15.008V21a1 1 0 1 1-2 0V4a1 1 0 0 1 .307-.721M20 13.243V5.268c-1.03.18-2.284.275-3.606.26-1.978-.02-4.209-.285-6.204-.936a10.6 10.6 0 0 0-4.393-.455 7.5 7.5 0 0 0-1.52.314q-.165.056-.277.104v8.19a9 9 0 0 1 1.406-.482 8.37 8.37 0 0 1 5.5.464c1.62.72 3.586.97 5.43.944 1.439-.02 2.741-.207 3.664-.428"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFlagIcon;
