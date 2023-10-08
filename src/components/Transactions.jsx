import { useEffect, useState } from 'react'
import { BiTransfer } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import { useGlobalState, truncate } from '../store'
import { BsFillCaretDownFill } from 'react-icons/bs'

const Transactions = () => {
  const [transactions] = useGlobalState('transactions')
  const [end, setEnd] = useState(3)
  const [count] = useState(3)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return transactions.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [transactions, end])

  return (
    <div className="bg-[#151c25]">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient-5">
          {collection.length > 0 ? 'Latest Transactions' : 'No Transaction Yet'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-2 py-2.5">
          {collection.map((tx) => (
            <div
              key={tx.id}
              className="flex justify-between items-center border border-purple-500 text-gray-400 w-full shadow-xl shadow-[#1b1a1b] rounded-md overflow-hidden bg-gray-800 my-2 p-3"
            >
              <div className="rounded-md shadow-sm shadow-purple-500 p-2">
                <BiTransfer />
              </div>

              <div>
                <h4 className="text-sm">{tx.title} Transfered</h4>
                <small className="flex flex-row justify-start items-center">
                  <span className="mr-1">Received by</span>
                  <a href="#" className="text-purple-500 mr-2 font-bold">
                    {truncate(tx.owner, 4, 4, 11)}
                  </a>
                  <a href="#">
                    <MdOpenInNew />
                  </a>
                </small>
              </div>

              <p className="text-sm font-medium">{tx.cost}ETH</p>
            </div>
          ))}
        </div>

        {collection.length > 0 && transactions.length > collection.length ? (
          <div className="text-center my-5">
            <button
              className="shadow-xl shadow-[#222222] text-black
            bg-purple-800 hover:bg-purple-500
            rounded-full cursor-pointer p-2"
              onClick={() => setEnd(end + count)}
            >
              <BsFillCaretDownFill style={{ "fontSize": "25px" }} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Transactions
