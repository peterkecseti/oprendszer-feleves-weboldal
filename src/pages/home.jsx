import { useEffect, useState } from "react";

function Home() {
    const [visibleIcons, setVisibleIcons] = useState([false, false, false]);

    useEffect(() => {
        const timers = visibleIcons.map((_, index) =>
            setTimeout(() => {
                setVisibleIcons(prev => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                });
            }, 300 * (index + 1))
        );

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-8 pl-24">
                <h1 className="text-4xl font-bold mb-4">Linux fájlszerver</h1>
                <p className="text-lg text-gray-300 max-w-2xl text-center pb-4">
                    Biztonságos és gyors fájltárolás vállalkozásoknak és magánszemélyeknek
                </p>
                <p className="text-lg text-gray-300 max-w-2xl text-center">
                    Cégünk megbízható és skálázható fájlszerverszolgáltatást nyújt, hogy adataid mindig könnyen és gyorsan elérhetőek legyenek.
                </p>
                <div className="flex gap-4 mt-6">
                    {[0, 1, 2].map((index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className={`size-24 transition-opacity duration-500 ${visibleIcons[index] ? "opacity-100" : "opacity-0"}`}
                        >
                            {index === 0 && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                            )}
                            {index === 1 && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                            )}
                            {index === 2 && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                            )}
                        </svg>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
