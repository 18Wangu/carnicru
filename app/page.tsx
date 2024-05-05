import { Footer } from "./ui/footer";
import { CodePromo } from "./ui/lending-page/code-promo";
import { LinkInformations } from "./ui/lending-page/link-informations";
import { NosServices } from "./ui/lending-page/nos-services";

export default function Home() {
  return (
    <main>
      <div>
        <CodePromo />
      </div>
      <section className="m-3">
        <div>
          <NosServices />
        </div>     
        <div>
          <LinkInformations />
        </div>
        <footer>
          <Footer />
        </footer>
      </section>
    </main>
  );
}
