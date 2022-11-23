import {Link} from 'react-router-dom'
import logo from '../assets/logo.jpg'
export default function Header({text}) {
  return (
    <div className="text-center bg-[red] flex items-center p-4 md:p-10 shadow-md mb-5 ">
      <div className='radius-lg'>
      <Link to='/'>
        <img src={logo} alt="logo" className='w-[4%]' />
      </Link>
      </div>
      <Link to='/'>
        <button className=' p-1 bg-white text-black capitalize hover:bg-gray-600 hover:text-white'>log out</button>
      </Link>
    </div>
  );
}
