// import { Mumbai } from "@thirdweb-dev/chains";
// import {
//   ConnectWallet,
//   useAddress,
//   useChain,
//   useNetworkMismatch,
// } from "@thirdweb-dev/react";
// import React from "react";

// type Props = {};

// export default function SignInButton({}: Props) {
//   const address = useAddress();
//   const isOnWrongNetwork = useNetworkMismatch();
//   const [, switchNetwork] = useChain();

//   if (!address) {
//     return <ConnectWallet />;
//   }

//   if (isOnWrongNetwork) {
//     return (
//       <button onClick={() => switchNetwork(Mumbai)}>Switch Network</button>
//     );
//   }
//   return <div>SignInButton</div>;
// }
