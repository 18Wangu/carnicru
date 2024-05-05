import Image from "next/image"

export default function CarnicruLogo() {
    return (
        <div className="flex justify-center">
            <Image 
                src="/carnicru-logo.svg" 
                alt="Carnicru Logo" 
                width={200} 
                height={200} 
            />
        </div>
    );
}
