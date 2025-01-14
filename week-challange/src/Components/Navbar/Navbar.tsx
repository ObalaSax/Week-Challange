function Navbar() {
  return (
    <header className="flex items-center justify-between">
      <div className="text-2xl font-bold">
        <h1>Logo</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/counter" className="hover:text-blue-500">
              Counter
            </a>
          </li>
          <li>
            <a href="/todo" className="hover:text-blue-500">
              Todo
            </a>
          </li>
          <li>
            <a href="/graph" className="hover:text-blue-500">
              Graphs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Sign-Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
