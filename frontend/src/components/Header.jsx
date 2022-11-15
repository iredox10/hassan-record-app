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
      <div className='flex items-center gap-5'>
        <p className='bg-white px-4'>{text}</p>
      </div>
    </div>
  );
}
