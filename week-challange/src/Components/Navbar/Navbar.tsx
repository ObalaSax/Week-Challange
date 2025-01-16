function Navbar() {
  return (
    <header className="flex items-center justify-center p-2 bg-blue-700 text-white">
      <div className="text-2xl font-bold mr-5 ">
        <h1>Logo</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="hover:text-blue-600 hover:bg-white p-1 rounded"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/counter"
              className="hover:text-blue-600 hover:bg-white p-1 rounded"
            >
              Counter
            </a>
          </li>
          <li>
            <a
              href="/todo"
              className="hover:text-blue-600 hover:bg-white p-1 rounded"
            >
              Todo
            </a>
          </li>
          <li>
            <a
              href="/store"
              className="hover:text-blue-600 hover:bg-white p-1 rounded"
            >
              Store
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 hover:bg-white p-1 rounded"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 hover:bg-white p-1 rounded"
            >
              Sign-Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
