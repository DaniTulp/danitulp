import Nav from "components/Nav";
import { Spotify } from "components/Spotify";

export function Layout({ children }) {
  return (
    <div className="flex flex-col text-gray-900 selection:bg-yellow-900 selection:text-yellow-600 dark:text-gray-100">
      <Nav />
      <div className="container flex flex-col min-h-screen mx-auto bg-white dark:bg-gray-800 md:px-6">
        <div className="flex-1 px-4 pb-12 mx-auto ">
          <div className="mt-8">{children}</div>
        </div>
        <div className="self-center">
          <Spotify />
        </div>
      </div>
    </div>
  );
}
