import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className="text-center bg-black text-white md:p-5 mb-5">
      <Link to='/'>
        <h1 className="font-extrabold capitalize">hassan record</h1>
      </Link>
    </div>
  );
}
