
import Banner from './Banner';
import Categories from './Categories';


const Home = () => {
    console.log(new Date())
     
    return (
        <div>
             <Banner></Banner>
             <h1 className='text-4xl text-center font-bold text-blue-400 my-5'>Categories</h1>
             <Categories></Categories>
              
        </div>
    );
};

export default Home;