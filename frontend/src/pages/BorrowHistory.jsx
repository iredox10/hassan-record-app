import Header from "../components/Header"
import HeadText from "../components/HeadText"
import useFetch from "../hooks/useFetch"

export default function BorrowHistory() {
    const {data:borrows,err} = useFetch('http://localhost:4000/view-borrowed')
  return (
    <div>
        <Header />
    
        <HeadText text={'history of product borrowed'} />
        <div className='max-w-[90%] mx-auto' >
        {borrows && borrows.map(borrow =>(
            <div key={borrow.id}>
                <table className='w-full bg-red-50 capitalize'>
                  <tr className='bg-red-500'>
                    <th>collector</th>
                    <th>product</th>
                    <th>amount</th>
                    <th>date</th>
                  </tr>
                  <tr className='text-center capitalize'>
                    <td className='py-2'>{borrow.collectorName}</td>
                    <td className='py-2'>{borrow.product}</td>
                    <td className='py-2'>N {borrow.amount}</td>
                    <td className='py-2'>{borrow.createdAt}</td>
                  </tr>
                </table>
            </div>
        ))}
        </div>
    </div>
  )
}
