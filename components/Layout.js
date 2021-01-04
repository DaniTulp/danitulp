import Nav from "components/Nav";
import { Spotify } from "components/Spotify";

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen selection:bg-yellow-900 selection:text-yellow-600">
      <Nav />
      <div className="container flex-1 px-4 pb-12 mx-auto mt-8 md:px-6">
        {children}
      </div>
      <div className="self-center">
        <Spotify />
      </div>
    </div>
  );
}
