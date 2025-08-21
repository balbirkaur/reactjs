import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/counter" className="text-white hover:text-gray-300">
            Counter
          </Link>
        </li>
        <li>
          <Link to="/toggle-visibility" className="text-white hover:text-gray-300">
            Toggle Visibility
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
