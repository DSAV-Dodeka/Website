import React from "react";
import "./HomePromo.scss";

function HomePromo() {
  return (
    <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeSMseUrqy-HqhNDhvxNRaUosFqV74-a8XIL03vClxTO-NWtw/viewform?usp=sf_link">
        <div className="home_promo">
            <p>Op woensdag 16 november hebben we een open introductietraining. Schrijf je nu in!</p>
            <svg className="home_promo_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" /></svg>
        </div>
    </a>
  );
}

export default HomePromo;
