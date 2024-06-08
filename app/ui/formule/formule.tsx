import Image from 'next/image';

export default function Formule() {
    return (
        <div>
            <h1 className='text-2xl text-[#004339] text-center m-4'>Formule mensuelle</h1>
            <Image
                src="/formule-chien-image.svg"
                alt="Formule mensuelle"
                width={350}
                height={280}
            />
            <div className='bg-[#E30613] rounded-2xl m-4'>
                <button className='p-5 text-[#F8F9E9] text-2xl'>Commander</button> {/* je pense qu'il faudra remplacer le button par un link */}
            </div>
        </div>
    );
}