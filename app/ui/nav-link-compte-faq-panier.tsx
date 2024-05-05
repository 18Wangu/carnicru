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
    <div className="flex">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'text-[#004339] text-2xl pl-12',
              {
                'text-blue-600': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

// lorsque je clique sur un lien, la couleur du texte ne change pas