import DentistCard from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useGlobalContext();
  console.log(state)
  return (
    <main className={`${
      state.theme === 'dark' ? 'bg-dark text-dark' : 'bg-light text-light'
    }`}>
      <h1 className="text-3xl font-semibold p-4 mb-6">Home</h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 justify-center">
        {state.list?.map((dentist) => (
          <DentistCard
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
