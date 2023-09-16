import {useEffect} from 'react';
import { useGlobalContext } from '../Components/utils/global.context';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const Detail = () => {
  const { state, dispatch } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const urlDentist = `https://jsonplaceholder.typicode.com/users/` + id;
  const findFav = state.favs.find((pj) => pj.id === state.dentist.id);

  useEffect(() => {
    axios(urlDentist)
      .then((res) => {
        console.log(res);
        dispatch({ type: 'GET_DENTIST', payload: res.data });
      });
  }, [urlDentist, dispatch]);

  const addFav = () => {
    if (!findFav) {
      dispatch({ type: 'ADD_FAVS', payload: state.dentist });
    } else {
      const filteredFavs = state.favs.filter((pj) => pj.id !== state.dentist.id);
      dispatch({ type: 'DELETE_FAV', payload: filteredFavs });
    }
  };

  return (
    <div className={`text-center min-h-screen ${state.theme === 'dark' ? 'bg-dark text-dark' : 'bg-light text-light'}`}>
      <h5 className="text-2xl font-semibold">Dentist Detail {id}</h5>
      <button
        onClick={addFav}
        className={`text-2xl ${findFav ? 'text-yellow-500' : 'text-gray-500'}`}
      >
        {findFav ? <FaStar className='text-yellow-500' /> : <FaStar className="text-gray-500" />}
      </button>
      <div className="mt-4">
        <div className="text-xl font-semibold">{state.dentist?.username}</div>
        <div >{state.dentist?.email}</div>
        <div >{state.dentist?.phone}</div>
        <div >{state.dentist?.website}</div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
      >
        Volver
      </button>
    </div>
  );
};

export default Detail;
