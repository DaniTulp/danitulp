import Link from "next/link";

const links = [
  { href: "/snippets", label: "Snippets" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/", label: "Home" },
];

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-10 bg-white shadow-sm dark:bg-gray-800 "
      style={{
        backdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <ul className="flex items-center justify-between p-8">
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className="no-underline">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
