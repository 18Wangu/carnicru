'use client';

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { daysOneFont } from "./font";

const links = [
    { name: "Se connecter", href: "/pages/connexion" },
];

export default function NavLinkConnexion() {
    const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'text-[#149A77] text-2xl uppercase', //peut etre changer la couleur
              {
                'text-[#149A77]': pathname === link.href,
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