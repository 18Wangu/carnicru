'use client';

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const links = [
    { name: "Compte", href: "/compte" },
    { name: "Faq", href: "/faq" },
    { name: "Panier", href: "/panier" },
];

export default function NavLinkCompteFaqPanier() {
    const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'text-white',
              {
                'text-blue-600': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

// lorsque je clique sur un lien, la couleur du texte ne change pas