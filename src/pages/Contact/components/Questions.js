import React from "react";
import Question from "./Question";
import "./Questions.scss";

function Questions(props) {
    return (
        <div id="question_grid">
            {props.questions.map(vraag => 
                (vraag.vraag === "Wie is de leukste mascotte?" ?  <a key={vraag.vraag} id="arnold_vraag" href="https://www.instagram.com/arnold_dodeka/?hl=en" target="_blank" rel="noreferrer"><Question key={vraag.vraag} vraag={vraag.vraag} antwoord={vraag.antwoord}/></a> : <Question key={vraag.vraag} vraag={vraag.vraag} antwoord={vraag.antwoord}/>)
            )}
        </div>
        
    )
}

export default Questions;