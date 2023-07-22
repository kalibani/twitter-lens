"use client";
import { ConnectWallet, MediaRenderer } from "@thirdweb-dev/react";

import {
  PublicationSortCriteria,
  useExplorePublicationsQuery,
} from "../graphql/generated";

export default function ListUsers() {
  const { data, isLoading, error, isFetching } = useExplorePublicationsQuery({
    request: {
      sortCriteria: PublicationSortCriteria.TopMirrored,
    },
  });

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <ConnectWallet />
      </div>
      {/* <Web3Button
        contractAddress="0xb413df01580659F671471956e9D2fAe989d1dcd3"
        action={(contract) => contract.erc721.claim(1)}
        theme="dark"
      >
        Claim an NFT!
      </Web3Button> */}
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.explorePublications.items.map((post) => (
            <div
              key={post.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <MediaRenderer src={post?.metadata?.media[0]?.original.url} />
              <h3>{post?.metadata?.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
