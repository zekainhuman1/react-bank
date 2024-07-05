import "./index.css";
import Button from '../../component/button';
import money from "../../assets/moneyWelcome.png";
import { Link } from "react-router-dom";


export const welcomePage = () => {
    return (
        <div className="page welcome">
            <div className="welcome__bg">
                <div className="heading">
                    <h1 className="heading__title">Hello!</h1>
                    <h4 className="heading__sub__title">Welcome to bank app</h4>
                </div>
            </div>
            <img src={money} alt="Money" className="money__img"></img>
             
            <Button>Contained</Button>

        </div>

    );
  };
