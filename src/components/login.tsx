import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import config,{ Props } from "../config";
import { Content, Block,Loader } from "./layout";

export interface LoginProps {}

const Login: React.FC<LoginProps & Props> = (props) => {
  const [Login, setLogin] = useState({ login: "", password: "" });
  const [boolLoader, setBoolLoader] = useState(false);

  const history = useHistory();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setBoolLoader(true)
    const resp = await Axios.post(`${config.api}/login`,{data:{login:Login.login,password:Login.password}});
    console.log(resp);

  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...Login, [event.target.name]: event.target.value });
  };

  const checkLogged = () => {
    if (props.isLogged) {
      history.replace("/profile");
    }
  };
  useEffect(() => {
    checkLogged();
  });
  return (
    <Content>
      <Block>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="login"
              value={Login.login}
              onChange={handleChange}
            />
            <label htmlFor="">Login</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={Login.password}
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
          </div>
          <button type="submit" style={{ width: "92%" }}>
            Login
          </button>
        </form>
        {boolLoader ? <Loader/> : []}
      </Block>
    </Content>
  );
};

export default Login;
