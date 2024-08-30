import { Link } from 'waku';

import { Make } from '../types/makes';

export default async function HomePage() {
  const data = await getMakeData();

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <title>Makes</title>
      <h1 className="text-4xl font-bold tracking-tight">Choose a Make</h1>

      {data.length > 0 ? (
        <ul className="flex flex-row gap-10 max-w-1/2">
          {data.map((m) => (
            <li key={m.id} className="font-bold text-gray-500">
              <Link to={`/makes/${m.id}`}>{m.name}</Link>
            </li>
            ))}
        </ul>
      ) : (
        <p>There was a problem</p>
      )}
    </div>
  );
}

const getMakeData = async () => {
  const data: Make[] = [
    {
      id: 1,
      name: 'Mazda',
    },
    {
      id: 2,
      name: 'BMW',
    },
    {
      id: 3,
      name: 'Mercedes',
    },
    {
      id: 4,
      name: 'Audi',
    },
    {
      id: 5,
      name: 'Jaguar',
    },
    {
      id: 6,
      name: 'Tesla',
    },
  ];

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
