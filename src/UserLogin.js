import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Collections from './components/Collections';
import SupportAvatar from './components/SupportFiles/SupportAvatar';
import Activity from './components/Activity';

import { assets } from './components/data.js'
import { collection_assets } from './components/Collection_data.js'
import {activity_data} from './components/activity_data';

function UserLogin() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home assets={assets} collection_assets={collection_assets} />}></Route>
                <Route exact path="/explore" element={<Explore assets={assets} />}></Route>
                <Route exact path="/collections" element={<Collections is_collection assets={collection_assets} />}></Route>
                <Route exact path="/activity" element={<Activity activity_data={activity_data}/>}></Route>
            </Routes>
            <SupportAvatar style={{ position: 'fixed', bottom: '24px', right: '24px' }} />
        </>
    )
}

export default UserLogin;





// {
//     "node": {
//         "assetBundle": null,
//         "assetQuantity": {
//             "asset": {
//                 "relayId": "QXNzZXRUeXBlOjI4NjMzNjIzNg==",
//                 "assetContract": {
//                     "address": "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
//                     "blockExplorerLink": "https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963",
//                     "id": "QXNzZXRDb250cmFjdFR5cGU6MzAxNjQ4",
//                     "chain": "MATIC"
//                 },
//                 "collection": {
//                     "name": "Secret's muse",
//                     "id": "Q29sbGVjdGlvblR5cGU6NjU5MzcwOA==",
//                     "displayData": {
//                         "cardDisplayStyle": "CONTAIN"
//                     },
//                     "slug": "secretsmuse",
//                     "isMintable": false,
//                     "isSafelisted": false,
//                     "isVerified": false
//                 },
//                 "name": "Secret's muse",
//                 "animationUrl": "https://storage.opensea.io/files/9c1f2d2923b26ad8b4cca7061b1d8e0d.mp4",
//                 "backgroundColor": null,
//                 "isDelisted": false,
//                 "imageUrl": "https://lh3.googleusercontent.com/suilXIvdNn9H__vLvdO3UMQ-nMkg9M1ltmf3cGSkDJuF6CY8Tj9JauH9BplJ5jzeHaPkB-XIZorJ0lv3nh9Nl62r6NtnvRN_VZrHbuQ",
//                 "displayImageUrl": "https://lh3.googleusercontent.com/suilXIvdNn9H__vLvdO3UMQ-nMkg9M1ltmf3cGSkDJuF6CY8Tj9JauH9BplJ5jzeHaPkB-XIZorJ0lv3nh9Nl62r6NtnvRN_VZrHbuQ",
//                 "tokenId": "50689034101148337306444272472037726604967677116753948316107915340701203743568",
//                 "id": "QXNzZXRUeXBlOjI4NjMzNjIzNg==",
//                 "decimals": null
//             },
//             "quantity": "1",
//             "id": "QXNzZXRRdWFudGl0eVR5cGU6MTk4MTU4MDMzOTQ0NDA2Nzg0MzM2NDM3MjY0MjY5MjkwNDM1MjY2"
//         },
//         "relayId": "QXNzZXRFdmVudFR5cGU6MzQ0MTM3NjYzNA==",
//         "eventTimestamp": "2022-02-13T17:48:18",
//         "eventType": "SUCCESSFUL",
//         "offerExpired": null,
//         "customEventName": null,
//         "isMint": false,
//         "devFee": null,
//         "devFeePaymentEvent": null,
//         "fromAccount": null,
//         "price": {
//             "quantity": "700000000000000",
//             "quantityInEth": "700000000000000",
//             "asset": {
//                 "decimals": 18,
//                 "imageUrl": "https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg",
//                 "symbol": "ETH",
//                 "usdSpotPrice": 2944.66,
//                 "assetContract": {
//                     "blockExplorerLink": "https://polygonscan.com/address/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
//                     "chain": "MATIC",
//                     "id": "QXNzZXRDb250cmFjdFR5cGU6MTk3MTk2"
//                 },
//                 "id": "QXNzZXRUeXBlOjE3OTgwNjkx"
//             },
//             "id": "QXNzZXRRdWFudGl0eVR5cGU6MzM5NzIzNg=="
//         },
//         "endingPrice": null,
//         "seller": {
//             "address": "0x7010fa029a952ac41bd7751ede1f1b0973a809f6",
//             "config": null,
//             "isCompromised": false,
//             "user": {
//                 "publicUsername": "ShaynS",
//                 "id": "VXNlclR5cGU6MjI1NjcxMjY="
//             },
//             "displayName": "ShaynS",
//             "imageUrl": "https://lh3.googleusercontent.com/uIGsu6qh2CHie8pA9dfRV7RHsirld42ulnftqaQoAzLeyAwU5o_G8mR0UC94vNNQX6JWT7jr-_FVDx2rxGDTUvIo2SWqwp0CKUxY=s100",
//             "id": "QWNjb3VudFR5cGU6MjQxMzAxNDEy"
//         },
//         "toAccount": null,
//         "winnerAccount": {
//             "address": "0x6dad37ff0f8ee047b591fb24c63732b7ed0cfee9",
//             "config": null,
//             "isCompromised": false,
//             "user": {
//                 "publicUsername": "Enandlayas",
//                 "id": "VXNlclR5cGU6Mzk0MDYzNA=="
//             },
//             "displayName": "Enandlayas",
//             "imageUrl": "https://lh3.googleusercontent.com/L4CkczxJphlh2O44ZOeqOzp4mvBsf0-EyOf0ZhXmIkCiYsLOnak1uUBFgEtcrfApFMYv2ai7O_FNxSdNCWd25Iu43j2sHEmY8YlUKw=s100",
//             "id": "QWNjb3VudFR5cGU6OTE5NzYxMjM="
//         },
//         "transaction": {
//             "blockExplorerLink": "https://polygonscan.com/tx/0xe82d2749711c26238b1d4c463d1a76b650c1e7b603ddd11eb383e570a82acb5f",
//             "id": "VHJhbnNhY3Rpb25UeXBlOjI3NTU5NzU5OQ=="
//         },
//         "id": "QXNzZXRFdmVudFR5cGU6MzQ0MTM3NjYzNA==",
//         "__typename": "AssetEventType"
//     },
//     "cursor": "YXJyYXljb25uZWN0aW9uOjA="
// },