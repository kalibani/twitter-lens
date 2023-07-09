"use client";

import React from "react";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";

function WebThreeProviders({ children }: React.PropsWithChildren) {
  return <ThirdwebProvider activeChain={Mumbai}>{children}</ThirdwebProvider>;
}

export default WebThreeProviders;
