export interface Props{
  isLogged: boolean
}

export interface ISubmit{
  handleSubmit: void
}

export interface IShortenResp{
  url:string
}

export interface ILogin{
  login:string;
  password:string;
}

export interface IConfig{
  api:string
}

const config:IConfig={
  api:'http://localhost:5000'
}

export default config;