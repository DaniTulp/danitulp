import Nav from "components/Nav";
import { Spotify } from "components/Spotify";

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900 selection:bg-yellow-900 selection:text-yellow-600 dark:text-gray-100">
      <Nav />
      <div className="flex flex-col flex-1 sm:mx-6 md:mx-12">
        <main className="container flex flex-col flex-1 mx-auto bg-white dark:bg-gray-800 md:px-6">
          <div className="flex flex-col flex-1 px-4 pb-12 mt-8">{children}</div>
          <div className="self-center">
            <Spotify />
          </div>
        </main>
      </div>
    </div>
  );
}
