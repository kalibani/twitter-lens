import { useAddress, useChain, useNetworkMismatch } from "@thirdweb-dev/react";
import React from "react";

type Props = {};

export default function SignInButton({}: Props) {
  const address = useAddress();
  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useChain();
  return <div>SignInButton</div>;
}
