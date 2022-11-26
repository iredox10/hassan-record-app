import {useQuery} from 'react-query';
import Header from '../components/Header'
import HeadText from '../components/HeadText';
import PTag from '../components/PTag';
import useFetch from '../hooks/useFetch'

export default function PaymentStats() {
    const getFacts = async () => {
		const res = await fetch('http://localhost:4000/payment-method');
		return res.json();
	};
	// Using the hook
	const {data, err,} = useQuery('randomFacts', getFacts);
    // const { data, err } = useFetch(
    //     "http://localhost:4000/payment-method"
    //   );
  return (
    <div>
        <Header />
        <HeadText text='payment stats' />
        <div className='flex justify-center p-5 gap-5 '>
        {data && data.map(p =>(
            <div className='shadow-lg p-10 border-2 border-red-500' key={p._id}>
                <div className='capitalize font-bold text-center '>
                    <p className='text-5xl'>{p._id}</p>
                    <p>{p.count} times</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}
