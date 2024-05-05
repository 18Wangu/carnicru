import Image from "next/image"

export default function CarnicruLogo() {
    return (
        <div className="flex justify-center">
            <Image 
                src="/carnicru-logo.png" 
                alt="Carnicru Logo" 
                width={100} 
                height={100} 
            />
        </div>
    );
}
