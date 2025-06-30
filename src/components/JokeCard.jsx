// src/components/JokeCard.jsx

import useJoke from '../hooks/useJoke';

function JokeCard() {
    
    const { joke, loading, error, fetchJoke } = useJoke();

    return (
        <div className=" w-full md:w-2xl  mx-auto p-6 bg-yellow-100 rounded-xl shadow text-center">
            {loading && <p>Chargement...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {joke &&   
            <div>
                <p className="text-lg font-semibold mb-2">{joke.question}</p>
                <p className="text-md italic">{joke.answer}</p>
            </div>}
            <button
                onClick={fetchJoke}
                className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded"
            >
                Nouvelle blague
            </button>
        </div>
    );
}

export default JokeCard;