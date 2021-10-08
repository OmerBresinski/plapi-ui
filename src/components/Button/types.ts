export interface ButtonProps {
  text: string;
  size: Size;
  color: Color;
  variant: Variant;
  rounded?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  iconName?: string;
  iconPosition?: IconPosition;
  iconAnimationType?: IconAnimationType;
  width?: string;
}

export interface StyledButtonProps extends ButtonProps {
  isRounded?: boolean;
}

type Color = 'primary' | 'secondary' | 'danger' | 'invert' | 'light' | 'white' | 'blue' | 'orange';

type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

type Variant = 'contained' | 'outlined';

type IconPosition = 'end' | 'start';

type IconAnimationType = 'spin';
