import Image from 'next/image';

export default function Formule() {
    return (
        <div className='flex flex-col items-center'>{/* nativement ca prend toute la largeur de l'ecran, peut etre mettre une with pour restrindre */}
            <h1 className='text-2xl text-[#004339] m-4'>Formule mensuelle</h1>
            <Image
                src="/formule-img-chien.svg"
                alt="Formule mensuelle"
                width={350}
                height={280}
            />
            <div className='bg-[#E30613] rounded-2xl m-4 w-80'>
                <button className='p-5 text-[#F8F9E9] text-2xl'>Commander</button> {/* je pense qu'il faudra remplacer le button par un link */}
            </div>
        </div>
    );
}