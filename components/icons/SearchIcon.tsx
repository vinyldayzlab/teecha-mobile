import Svg, { Path, SvgProps } from "react-native-svg";

export const SearchIcon = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={props.width ?? 24}
      height={props.height ?? 24}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
      />
    </Svg>
  );
};
