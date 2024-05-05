import Link from "next/link";
import CarnicruLogo from "./carnicru-logo";
import NavLink from "./nav-link";

export default function NavBar() {
    return (
        <div>
            <Link
                href="/"
            >
                <div>
                    <CarnicruLogo />
                </div>
            </Link>
            <div>
                <NavLink />
            </div>
        </div>
    )
}