import Link from "next/link";
import CarnicruLogo from "./carnicru-logo";
import NavLinkCompteFaqPanier from "./nav-link-compte-faq-panier";
import NavLinkConnexion from "./nav-link-connexion";

export default function NavBar() {
    return (
        <div className="flex justify-between px-12 py-5 h-25 bg-gray-200">
            <div>
                <NavLinkConnexion />
            </div>
            <Link href="/">
                <div>
                    <CarnicruLogo />
                </div>
            </Link>
            <div>
                <NavLinkCompteFaqPanier />
            </div>
        </div>
    )
}