'use client';

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const links = [
    { name: "Connexion", href: "/connexion", className: "text-red-500" },
    { name: "Compte", href: "/compte", className: "text-blue-500" },
    { name: "Faq", href: "/faq", className: "text-green-500" },
    { name: "Panier", href: "/panier", className: "text-yellow-500" },
];

export default function NavLink() {
    const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'text-gray-500',
              {
                'text-blue-600': pathname === link.href,
              },
            )}
          >
          </Link>
        );
      })}
    </>
  );
}

// lorsque je clique sur un lien, la couleur du texte ne change pas