import { useEffect, useState } from "react";

const Colleagues = () => {
    const [show, setShow] = useState([false, false, false]);

    useEffect(() => {
        const timeouts = show.map((_, i) =>
            setTimeout(() =>
                setShow((prev) => prev.map((value, index) => (index === i ? true : value))), i * 100)
        );
        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8 pl-24">
            <h1 className="text-3xl font-bold mb-4">Munkatársaink</h1>
            <p className="text-gray-400 mb-8 text-center max-w-lg">
                Ismerd meg munkatársainkat
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {["Kecseti Péter", "Győri Zsófia", "Fekete Dániel"].map((name, index) => (
                    <div key={name} className={`bg-gray-800 p-6 rounded-xl shadow-lg text-center transition-opacity duration-500 ${show[index] ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-24 mx-auto mb-4">
                            {index === 2 ? 
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            : index === 1 ? 
                            <>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                            </>
                            : 
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />}
                        </svg>
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p className="text-gray-400 font-light">
                            {index === 2 ? "Clown" : index === 1 ? "Jack of All Trades" : "Web Developer"}
                        </p>
                        <p className="text-gray-400 font-light">
                            {index === 2 ? "Csak azért tartjuk, mert vicces" : index === 1 ? "Majdnem mindent ő csinál" : "A weboldal fejlesztője"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Colleagues;