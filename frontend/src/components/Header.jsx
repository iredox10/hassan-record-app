import {Link} from 'react-router-dom'
import logo from '../assets/logo.jpg'
export default function Header() {
  return (
    <div className="text-center bg-[red] flex items-center p-4 md:p-10 shadow-md mb-5 ">
      <div className='radius-lg'>
      <Link to='/'>
        <img src={logo} alt="logo" className='w-[5%]' />
      </Link>
      </div>
      <div>
        <Link to='#'>
          home
        </Link>
      </div>
    </div>
  );
}
