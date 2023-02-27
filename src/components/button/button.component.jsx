// default / inverted / google sign in

import { BaseButton, InvertedButton, GoogleSignInButton } from './button.styles.jsx';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {

    return({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType])

}
const Button = ({children, onClick, buttonType, ...otherProps}) => {

    const CustomButton = getButton(buttonType); 

return (
    <CustomButton onClick={onClick}>
    {children}
    </CustomButton>
)

}

export default Button;