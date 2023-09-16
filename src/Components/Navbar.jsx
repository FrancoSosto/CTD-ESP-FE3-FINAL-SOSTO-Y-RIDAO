import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
import { FaMoon, FaSun } from 'react-icons/fa6';

const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();

  const handleTheme = () => {
    if (state.theme === 'dark') {
      dispatch({ type: 'LIGHT' });
    } else {
      dispatch({ type: 'DARK' });
    }
  };

  return (
    <header
      className={`bg-${state.theme === 'dark' ? 'gray-900' : 'blue-500'} p-4 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-2">
          <button
            onClick={() => navigate('/')}
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/favs')}
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            Favoritos
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            Contact
          </button>
        </div>
        <div>
          {state.theme === 'dark' ? (
            <button
              onClick={handleTheme}
              className="text-yellow-500 hover:text-yellow-300 cursor-pointer"
            >
              <FaSun />
            </button>
          ) : (
            <button
              onClick={handleTheme}
              className="text-black hover:text-gray-700 cursor-pointer"
            >
              <FaMoon />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
