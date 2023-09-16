/* eslint-disable react/prop-types */
import { useGlobalContext } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

const DentistCard = ({ name, username, id }) => {
  const {state} = useGlobalContext()

  return (
    <div
    className={`bg-white shadow-md rounded-md p-4 m-4 transition-transform transform hover:scale-105 ${
      state.theme === 'dark' ? 'bg-dark text-dark' : 'bg-light text-light'
    }`}
    style={{ maxWidth: '200px' }}
  >
      <img
        src="./images/doctor.jpg"
        alt="DH-logo"
        className="w-full h-auto"
      />
      <div className="text-center mt-4">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-600 text-sm">{username}</p>
        <Link to={`/dentist/${id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700">
            VER MÁS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DentistCard;

