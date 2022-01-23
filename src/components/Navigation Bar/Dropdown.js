import React, { useState } from "react";
import {
    useLocation
} from "react-router-dom";
import {
    HashLink as Link
  } from "react-router-hash-link";
import "./Dropdown.scss";

function Dropdown(props) {
    const location = useLocation().pathname;
    const [active, setActive] = useState(false);

    return (
        <div id="navDropdown" onMouseLeave={() => setActive(false)}>
            <Link to={props.path + "#"} onMouseEnter={() => setActive(true)} className={"dropdownNav " + (location.includes(props.path) ? "navDropdownActive" : "navDropdownNormal") }>{props.name}</Link>
            <div onClick={() => setActive(false)} className={active ? "drop" : "dropHide"}>
                {props.items.map((item) => (
                    <Link key={"pcDrop" + item.name} to={props.path + item.path + "#"} className={"dropdownElement"}>{item.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;