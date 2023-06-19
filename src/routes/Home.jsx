import {Link} from 'react-router-dom';
import '../my-style.scss';

const Home = ()=>{
    return (
    <>
       <div className='image-container'>
        <img src='/mountainimg.jpg' alt='mountain'/>
        <p>You got the travel plans, we got the travel vans.</p>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link className='findVanLink' to='/vans'>Find your van</Link>
       </div>
    </>
    )
}

export default Home;