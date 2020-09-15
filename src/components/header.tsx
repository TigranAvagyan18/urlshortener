import React from "react";
import HeaderClasses from "./../scss/modules/header.module.scss";
import { Link } from "react-router-dom";

export interface HeaderProps {
  isLogged: boolean;
}

const FormLogin: React.FC = () => {
  return (
    <div className={HeaderClasses.login}>
      <Link to="/login">Login</Link>
    </div>
  );
};

const Profile: React.FC = () => {
  return <div className={HeaderClasses.profile}></div>;
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <div className={HeaderClasses.logo}>
        <Link to="/">
          <i className="fa fa-link" aria-hidden="true"></i>
          <span>
            <strong>URL</strong> <small>shortener</small>
          </span>
        </Link>
      </div>
      <div className={HeaderClasses.right}>
        {props.isLogged ? <Profile /> : <FormLogin />}
      </div>
    </header>
  );
};

export default Header;
