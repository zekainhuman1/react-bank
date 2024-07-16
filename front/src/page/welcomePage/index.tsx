import "./index.css";
import Button from '../../component/button';
import money from "../../assets/moneyWelcome.png";


export const welcomePage = () => {
  const login = () => {};
  const registration = () => {};

    return (
        <div className="page welcome">
            <div className="welcome__bg">
                <div className="heading">
                    <h1 className="heading__title">Hello!</h1>
                    <h4 className="heading__sub__title">Welcome to bank app</h4>
                </div>
            </div>
            <img src={money} alt="Money" className="money__img"></img>
             <div className="button-container">
            <Button onClick={registration} className="button button--active button--filled" redirectTo="/signup">Sign Up</Button>
            <Button onClick={login} className='button' redirectTo="/signin">Sign In</Button>
            </div>

        </div>

    );
  };
