import "./buttons.scss"
import Spinner from "../spinner-component/spinner.componenet";

export const BUTTON_TYPE_CLASSES = {
    google:"google-sign-in",
    inverted: 'inverted',
    
}

const Button = ({children,buttonType,isLoading,...otherProps}) =>{
    return (  <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}>
        {isLoading ? <Spinner className = "loading " /> : children}
    </button>);
};

export default Button;
