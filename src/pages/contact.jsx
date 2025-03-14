const Contact = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8  pl-24">
        <h1 className="text-3xl font-bold mb-4">Kapcsolat</h1>
        <p className="text-gray-400 mb-8 text-center max-w-lg">
          Kérdésed van? Írj üzenetet, mi pedig mihamarabb válaszolunk!
        </p>
        
        <form className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">Név</label>
            <input type="text" id="name" className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="A neved" required />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Az email címed" required />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="message">Üzenet</label>
            <textarea id="message" rows="4" className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Az üzeneted" required></textarea>
          </div>
          
          <button type="submit" className="w-full bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-semibold transition-full duration-300">
            Üzenet küldése
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;