import Image from 'next/image';

export function LinkInformations() {
  return (
    <section className="flex w-full">
          <article className="flex-1 bg-[#149A77] rounded-3xl mr-4">
            <h1 className="text-[#F8F9E9] p-7 text-3xl">Qui sommes <br /> nous ?</h1>
          </article>
          <article className="flex flex-1 bg-[#B0D8C1] rounded-3xl mr-4">
            <h1 className="text-[#004339] p-7 text-3xl">Infos <br /> Pratiques</h1>
            <Image
              src="/icone-boucle-verte.svg"
              alt="Infos Pratiques"
              width={100}
              height={100}
            />
          </article>
          <article className="flex-1 bg-[#004339] rounded-3xl mr-4">
            <h1 className="text-[#F8F9E9] p-7 text-3xl">Le BARF <br /> en bref !</h1>
          </article>
          <article className="flex flex-1 bg-[#149A77] rounded-3xl">
            <h1 className="text-[#F8F9E9] p-7 text-3xl">Jouets <br /> & Goodies</h1>
            <Image
              src="/icone-boucle-blanche.svg"
              alt="Infos Pratiques"
              width={100}
              height={100}
            />
          </article>
        </section>
    );
}