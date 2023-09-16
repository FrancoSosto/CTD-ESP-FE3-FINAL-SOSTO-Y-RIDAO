import { useGlobalContext } from '../Components/utils/global.context';
import DentistCard from '../Components/Card';

const Favs = () => {
  const { state } = useGlobalContext();

  return (
    <div className={`pt-2 min-h-screen text-center ${
      state.theme === 'dark' ? 'bg-dark text-dark' : 'bg-light text-light'}`}>
      <h1 className="text-3xl font-semibold mb-6">Dentists Favorites</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {state.favs?.map((dentist) => (
          <DentistCard
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;


