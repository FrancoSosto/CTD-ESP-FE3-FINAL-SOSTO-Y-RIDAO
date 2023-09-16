import Form from "../Components/Form";
import { useGlobalContext } from '../Components/utils/global.context';

const Contact = () => {
  const {state} = useGlobalContext()

  return (
    <div className={`h-screen p-12 ${ state.theme === 'dark' ? 'bg-dark text-dark' : 'bg-light text-light'}`}>
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Want to know more?
        </h2>
        <p className="mb-4">
          Send us your questions and we will contact you
        </p>
        <Form />
      </div>
    </div>
  );
};

export default Contact;

