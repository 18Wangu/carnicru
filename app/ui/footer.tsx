import { montserratFont } from "./font";

export function Footer() {
  return (
    <footer className="flex justify-between bg-[#004339] text-[#F8F9E9] rounded-3xl mt-3 p-7">
        <h2 className="flex items-center text-4xl">CARNICRU</h2>
        <div className="flex flex-col justify-between">
            <h3>Nos réseaux</h3>
            <div className="flex">
                {/* a remplacer par reseaux sociaux */}
                <div className="bg-[#F8F9E9] h-4 w-3 mr-4"></div>
                <div className="bg-[#F8F9E9] h-4 w-3 mr-4"></div>
                <div className="bg-[#F8F9E9] h-4 w-3 mr-4"></div>
                <div className="bg-[#F8F9E9] h-4 w-3"></div>
            </div>
        </div>
        <div className="flex flex-col justify-between">
            <h3>Nous contacter</h3>
                <p className={montserratFont.className}>numéro : 0676786534</p>
                <p className={montserratFont.className}>mai : carnicru.contact@gmail.com</p>
        </div>
        <div className="flex flex-col justify-between">
            <h3>Nous découvrir</h3>
                <p className={montserratFont.className}>Qui sommes nous ?</p>
        </div>
        <div className="flex flex-col justify-between">
            <h3>Nos réseaux</h3>
                <p className={montserratFont.className}>Qui sommes nous ?</p>
        </div>
    </footer>
  );
}