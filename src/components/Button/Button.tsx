import * as S from './style';
import { ButtonProps } from './types';

const Button = ({variant = 'contained', color = 'primary', rounded, ...props}: ButtonProps) => {
    return <S.Button {...props} variant={variant} color={color} isRounded={rounded} iconPosition="end" disabled={false} rounded={false} isActive={false} iconName={undefined}>{props.text}</S.Button>
}

export default Button;