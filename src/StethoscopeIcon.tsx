import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgStethoscopeIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 5a1 1 0 0 1-1 1H4v2c0 1.123.317 1.835.761 2.27.449.437 1.167.73 2.239.73 1.05 0 1.772-.31 2.23-.77.46-.458.77-1.18.77-2.23V6H9a1 1 0 0 1 0-2h2q.052 0 .102.005A1 1 0 0 1 12 5v3c0 1.45-.44 2.728-1.355 3.645-.7.699-1.609 1.12-2.645 1.28v1.36c0 1.25.362 2.435 1.074 3.289C9.764 18.4 10.848 19 12.5 19s2.737-.6 3.426-1.426c.6-.72.952-1.676 1.047-2.707A4.002 4.002 0 0 1 18 7a4 4 0 0 1 .979 7.88c-.102 1.417-.574 2.844-1.517 3.975C16.363 20.172 14.698 21 12.5 21s-3.863-.828-4.962-2.145C6.463 17.565 6 15.893 6 14.285V12.93c-1.023-.149-1.932-.542-2.636-1.23C2.433 10.79 2 9.502 2 8V5a.997.997 0 0 1 1-1h2a1 1 0 0 1 1 1m12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgStethoscopeIcon;
