import Link from "./Link";

const links = [
  { href: "/snippets", label: "Snippets" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/", label: "Home" },
];

export default function Nav() {
  return (
    <>
      <div className="absolute w-full bg-white p-11 dark:bg-gray-800" />
      <nav
        className="sticky top-0 z-10 bg-white bg-opacity-75 shadow-sm dark:shadow-lg dark:bg-gray-800"
        style={{
          backdropFilter: "saturate(180%) blur(20px)",
        }}
      >
        <ul className="flex items-center justify-between max-w-3xl p-8 mx-auto space-x-4">
          {links.map(({ label, href, ...props }) => (
            <li key={`${href}${label}`}>
              <Link href={href} activeClassName="active" {...props}>
                <a className="inline-block no-underline link">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
