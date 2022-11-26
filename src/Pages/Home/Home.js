
import Banner from './Banner';
import Categories from './Categories';
import Feedback from './Feedback';
import Advertisement from './Advertisement';
import { GridLoader } from 'react-spinners';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';


const Home = () => {
    const {loading}=useContext(AuthContext);
    console.log(new Date());
    if(loading){
        return <GridLoader size={60} color="#36d7b7" />
      }
     
    return (
        <div>
             <Banner></Banner>
             
             <Advertisement></Advertisement>
             <h1 className='text-4xl text-center font-bold text-blue-400 my-5'>Categories</h1>
             <Categories></Categories>
             <Feedback></Feedback>
              
        </div>
    );
};

export default Home;