import Image from 'next/image';

export function PageIndisponible() {
    return (
        <main>
            <div> 
                <div>
                    <Image 
                        src="/coeur.svg" 
                        alt="image de coeur page indisponible" 
                        width={200} 
                        height={200} 
                    />
                </div>
                <h1>Désolé ! Cette page n’est pas encore disponible...</h1>
                    <p>Suivez nous sur les réseaux et abonnez vous à notre newsletter pour être au courant des dernières avancées !</p>
            </div>
        </main>
    );
}