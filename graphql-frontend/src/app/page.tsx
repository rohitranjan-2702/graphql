"use client";
import Loader from "@/components/Loader";
import { gql, useQuery } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      username
      age
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(QUERY_ALL_USERS);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold">Welcome to the GraphQL Frontend</h1>
        <p className="text-lg mt-4">
          This is a simple example of how to use GraphQL with Next.js.
        </p>
        {data.users.map((user: any) => (
          <div key={user.id} className="mt-4">
            <h2 className="text-xl font-bold">{user.username}</h2>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
