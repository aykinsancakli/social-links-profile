import {
  user,
  userPic,
  links,
  userLocation,
  userDescription,
} from './constants';

const App = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-off-black">
      <article className="flex flex-col items-center justify-center p-8 rounded-lg bg-grey-dark max-sm:w-[350px]">
        <img
          src={userPic}
          alt="profile"
          width={112}
          height={112}
          className="mb-4 rounded-full"
        ></img>
        <h1 className="mb-1 text-2xl font-semibold text-white capitalize text-md">
          {user}
        </h1>
        <p className="mb-4 text-sm font-semibold text-green">{userLocation}</p>
        <p className="mb-6 text-sm text-white">{userDescription}</p>

        {links.map((link) => (
          <a
            key={link.label}
            href={link.link}
            target="blank"
            className="px-3 py-3 mb-3 text-sm font-semibold text-center text-white rounded-lg w-[300px] bg-grey-light hover:bg-green hover:text-grey-dark transition duration-500"
          >
            {link.label}
          </a>
        ))}
      </article>
    </main>
  );
};

export default App;
