import { useGlobalContext } from "../Components/utils/global.context";


const Footer = () => {
  const {state} = useGlobalContext()
  return (
    <footer className={`py-4 text-center ${
      state.theme === 'dark' ? 'bg-gray-950 text-dark' : 'bg-blue-500 text-dark'
    }`}>
      <p>Powered by</p>
      <img src="../../public/images/DH.png" alt="DH-logo" className=" h-8 mx-auto mt-2" />
    </footer>
  );
};

export default Footer;

