// src/components/Hero.jsx

import JokeCard from "./JokeCard";
import carambarFun from "../assets/images/carambar-fun.png";

function Hero() {
    return ( 
        <section className="flex flex-col bg-[#fffae7] items-center justify-center flex-grow text-center px-6 py-20">
            <img
            src={carambarFun}
            alt="Bonbon Carambar souriant"
            className="mb-6 w-40 md:w-60"
            />
            <h2 className="text-4xl font-extrabold mb-4">
            Riez chaque jour avec Carambar !
            </h2>
            <p className="max-w-xl mb-8 text-lg">
            Découvrez une blague fraîchement pêchée pour illuminer votre journée.
            </p>
            <JokeCard />
        </section>
    )
}

export default Hero;
    