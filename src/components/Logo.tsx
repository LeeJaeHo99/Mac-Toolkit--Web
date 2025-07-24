import Image from "next/image";

export default function Logo() {
    return (
        <div className="logo-wrap">
            <Image src="/icons/logo.png" alt="logo" width={80} height={80} />
            <p>Mac Toolkit</p>
        </div>
    );
}