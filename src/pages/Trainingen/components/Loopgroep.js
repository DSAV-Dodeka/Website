import React from "react";
import Header from "../../../components/Header";
import "./Loopgroep.scss"

function Loopgroep(props) {
    return(
        <div className="loopgroep_1">
            <div className="loopgroep_2">
                <Header text="Loopgroep" position="right"/>
                <p className="loopgroep_3">
                    {props.text.split('\n').map((item, index) =>
                        <span key={"loop" + index}>
                            {item}
                            <br/>
                        </span>
                    )}  
                </p>
            </div> 
            <img src={require(`../../../images/trainingen/${props.foto}`).default} alt="" className="loopgroep_4" />
               
        </div>
    )
}
export default Loopgroep;