import React, { useState } from "react";
import Axios from "axios";
import copy from "copy-to-clipboard";
import validUrl from "valid-url";
import config, { Props } from "../config";
import { Content,Loader, Block } from "./layout";

export interface MainProps {}

const Main: React.FC<MainProps & Props> = (props) => {
  const [boolLoader, setBoolLoader] = useState(false);
  const [boolResponse, setBoolResponse] = useState(false);
  const [UrlValue, setUrlValue] = useState<string>("");
  const [error, setError] = useState(false);
  const [resp, setResp] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (validUrl.isUri(UrlValue)) {
      setBoolLoader(true);
      const resp = await Axios.post(`${config.api}/shorten`, {
        data: { url: UrlValue },
      });
      setResp(resp.data);
      setBoolResponse(!boolResponse);
      setBoolLoader(false);
    } else {
      setError(!error);
    }
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type?: boolean
  ): void => {
    const value = event.target.value;
    if (!type) {
      setUrlValue(value);
    }
    setError(false);
  };
  return (
    <Content>
      <Block>
        <h1>Paste the URL to shorten</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="input"
            required
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input">URL</label>
          <button type="submit">Shorten</button>
        </form>
        {error ? <span>*Enter a valid URL</span> : []}
        {boolLoader ? <Loader /> : []}
        {boolResponse ? (
          <form
            onSubmit={(e) => {
              copy(resp);
              e.preventDefault();
            }}
            style={{ marginTop: "20px" }}
          >
            <input type="text" name="input" value={resp} />
            <button type="submit" style={{ borderRadius: "50" }}>
              <i className="fa fa-link" aria-hidden="true"></i>
            </button>
          </form>
        ) : (
          []
        )}
      </Block>
      <Block>
        <h1>Paste the URL to shorten</h1>
        <form>
          <input type="text" />
          <button type="submit">Shorten</button>
        </form>
      </Block>
    </Content>
  );
};

export default Main;
