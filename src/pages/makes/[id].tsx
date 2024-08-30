import { Link, useRouter_UNSTABLE as useRouter } from 'waku';

import { Make } from '../../types/makes';
import { HOME_PAGE } from '../../constants/pages';

type TProps = {
  id: string;
}

export default async function MakePage({ id }: TProps) {
  const data = await getMakeData(parseInt(id));

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center gap-5">
        <title>Vehicle Make</title>
        <h1 className="text-4xl font-bold tracking-tight">Make not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <title>Vehicle Make</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.name}</h1>
    </div>
  );
}

const getMakeData = async (id: number) => {
  const data: Make[] = [
    {
      id: 1,
      name: 'Mazda',
      description: 'Japanese multinational automotive manufacturer headquartered in Fuchū, Hiroshima, Japan. The company was founded on January 30, 1920, as Toyo Cork Kogyo Co., Ltd., a cork-making factory, by Jujiro Matsuda. The company then acquired Abemaki Tree Cork Company. It changed its name to Toyo Kogyo Co., Ltd. in 1927 and started producing vehicles in 1931.',
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

  return data.find((m) => m.id === Number(id));
};

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
