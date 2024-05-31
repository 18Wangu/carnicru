import Link from "next/link";
import CarnicruLogo from "./carnicru-logo";
import NavLinkCompteFaqPanier from "./nav-link-compte-faq-panier";
import NavLinkConnexion from "./nav-link-connexion";

export default function NavBar() {
    return (
        <div className="flex justify-between items-center px-12 py-5 h-25"> {/* h-25 a changer pour que ca soit responsive */}
            <div className="pr-40"> {/* astuce pour centrer le logo, a changer car pas reponsive */}
                <NavLinkConnexion />
            </div>
            <div>
                <Link href="/">
                    <div>
                        <CarnicruLogo />
                    </div>
                </Link>
            </div>
            <div>
                <NavLinkCompteFaqPanier />
            </div>
        </div>
    )
}