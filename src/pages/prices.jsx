import { useEffect, useState } from "react";

const Prices = () => {
    const [show, setShow] = useState([false, false, false]);

    useEffect(() => {
        const timeouts = show.map((_, i) =>
            setTimeout(() =>
                setShow((prev) => prev.map((value, index) => (index === i ? true : value))), i * 100)
        );
        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-4">Áraink</h1>
            <p className="text-gray-400 mb-8 text-center max-w-lg">
                Válaszd ki az igényeidnek megfelelő csomagot
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {["Alap", "Normál", "Prémium"].map((plan, index) => (
                    <div key={plan} className={`bg-gray-800 p-6 rounded-xl shadow-lg text-center transition-opacity duration-500 ${show[index] ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}
                        >
                        <h2 className="text-xl font-semibold">{plan}</h2>
                        <p className="text-4xl font-bold my-4">{index * 2000 + 3999} Ft/hónap</p>
                        <ul className="text-gray-400 mb-6">
                            <li>{index === 2 ? "Végtelen" : index === 1 ? "50GB" : "10GB"} tárhely</li>
                            <li>{index === 2 ? "0-24 Prémium" : index === 1 ? "Prioritásos" : "Alap"} ügyfélszolgálat</li>
                        </ul>
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                            Kiválaszt
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Prices;