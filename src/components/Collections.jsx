// import { useEffect, useState } from 'react'
// import { useGlobalState, setGlobalState, truncate, setAlert } from '../store'
// import { Card } from './Artworks'



// const Collections = () => {
//   const [collection, setCollection] = useState([])
//   const [connectedAccount] = useGlobalState('connectedAccount')
//   const [nfts] = useGlobalState('nfts')
//   const [nft] = useGlobalState('nft')
//   const [end, setEnd] = useState(4)
//   const getCollection = () => {
//     return nfts.slice(0, end)
//   }

//   useEffect(() => {
//     setCollection(getCollection())
//   }, [nfts, end])
//   return (
//     <div>
//       {connectedAccount == nft?.owner ?
//         "dddddddddddddddddd"
//         :
//           (
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
//               ffffffffff
//               {collection.map((nft, i) => (
//                 <Card key={i} nft={nft} />
//               ))}
//             </div>)
            
//       }
//       dd
//     </div>
//   )
// }

// export default Collections