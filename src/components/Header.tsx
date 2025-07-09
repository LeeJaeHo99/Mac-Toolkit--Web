import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="inner">
                <Link href="/" className="logo">
                    <Image
                        src="/icons/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                    <h1>Mac Toolkit</h1>
                </Link>
            </div>
        </header>
    );
}
