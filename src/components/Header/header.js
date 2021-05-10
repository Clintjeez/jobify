import React from "react";
import "./header.css";
import Switch from "@material-ui/core/Switch";
import lightIcon from "../../assets/icons/icon-sun.svg";
import darkIcon from "../../assets/icons/icon-moon.svg";

export default function header() {
  return (
    <header>
      <div className="container d-flex">
        <div className="logo">
          <a href="#">
            <p>Jobify</p>
          </a>
        </div>
        <div className="mode d-flex">
          <img src={lightIcon} alt="light" />
          <Switch
            // checked={state.checkedB}
            // onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <img src={darkIcon} alt="dark" />
        </div>
      </div>
    </header>
  );
}
