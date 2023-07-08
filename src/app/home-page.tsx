"use client";

import {
  PublicationSortCriteria,
  useExplorePublicationsQuery,
} from "../graphql/generated";

export default function ListUsers() {
  const { data, isLoading, error, isFetching } = useExplorePublicationsQuery(
    {
      endpoint: "https://api-mumbai.lens.dev/",
      fetchParams: {
        headers: {
          "content-type": "application/json",
        },
      },
    },
    {
      request: {
        sortCriteria: PublicationSortCriteria.TopCollected,
      },
    }
  );

  console.log("--->", data);
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}></div>

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
          {/* {data.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ height: 180, width: 180 }}
              />
              <h3>{user.name}</h3>
            </div>
          ))} */}
        </div>
      ) : null}
    </main>
  );
}
