import React from "react";
import {
    Link
} from "react-router-dom";
import "./HomeNieuws.css";
import foto from "../../../images/home/nieuws.png";
import Nieuws from "../../../content/Nieuws.json";

function HomeNieuws() {
    let maxNieuws = 3;
    if (window.innerWidth <= 768) maxNieuws = 1; 
  return (
    <div class="w-full relative lg:h-96 mt-8 lg:mt-24">
        <div class="lg:absolute dia left-0 w-full lg:w-1/3 h-96 bg-rood bg-opacity-60">
            <img class="w-full h-full object-cover" src={foto} alt=""/>

        </div>
        <div class="lg:absolute diagonal w-full lg:w-3/4 right-0 bg-blauw bg-opacity-90 lg:h-96 p-2 lg:pl-40 lg:pr-16">
            {Nieuws.nieuwsberichten.slice(0, maxNieuws).map(item =>
                    <div class="inline-block text-white w-full lg:w-1/3 align-top lg:mt-28 h-64 border-r-2 border-white border-opacity-50">
                        <div class="h-56 overflow-y-hidden">
                            <h1 class="font-bold text-2xl mx-2">{item.titel}</h1>
                            <h2 class="pt-4 mx-2 overflow-y-hidden h-48">{item.tekst}</h2>
                        </div>
                        <Link to="/nieuws"><h2 class="pt-2 mx-2 text-right text-rood font-bold underline">Lees meer</h2></Link>
                    </div>
                )}

        </div>
        <div class="absolute lg:right-0 top-8 w-3/4 bg-rood h-16 text-white text-3xl font-bold pl-8 lg:pl-16 pt-3">NIEUWS</div>
    </div>
  );
}

export default HomeNieuws;
