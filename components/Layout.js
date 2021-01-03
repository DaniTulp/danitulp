import Nav from "components/Nav";
import { Spotify } from "components/Spotify";

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="container flex-1 px-4 pb-12 mx-auto md:px-6">
        {children}
      </div>
      <div className="self-center">
        <Spotify />
      </div>
    </div>
  );
}
