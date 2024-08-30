import { Link } from 'waku';

export const Header = () => {
  return (
    <header className="flex items-center gap-4 p-6 lg:fixed lg:left-0 lg:top-0 w-full bg-green-900">
      <div className="flex w-1/5">
        <h2 className="text-xl font-bold tracking-tight text-green-300">
          <Link to="/">WROOM</Link>
        </h2>
      </div>
      <div className="flex w-3/5 justify-center font-bold text-lg">
        <Link to="/about" className="inline-block underline justify-self-center text-green-400">
          ABOUT
        </Link>
      </div >
    </header>
  );
};
