// src/components/Header.jsx

function Header() {
    return ( 
      <header className="bg-yellow-400 shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Carambar & Co</h1>
          <nav>
            <a href="#about" className="text-white hover:underline ml-6">À propos</a>
          </nav>
        </div>
      </header>
    )
}

export default Header;