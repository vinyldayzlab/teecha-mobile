import Svg, { Path, SvgProps } from "react-native-svg";

interface AddIconProps extends SvgProps {
  className?: string;
}

export const AddIcon = ({ className, ...props }: AddIconProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={props.width ?? 24}
      height={props.height ?? 24}
      className={className}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
      />
    </Svg>
  );
};
