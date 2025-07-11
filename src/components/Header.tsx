import Image from "next/image";
import Link from "next/link";
import Button from "@/ui/Button";

export default function Header() {
    return (
        <header className="blur-box">
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
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Apps</Link>
                        </li>
                        <li>
                            <Link href="/">Features</Link>
                        </li>
                        <li>
                            <Link href="/">Pricing</Link>
                        </li>
                        <li>
                            <Link href="/">Support</Link>
                        </li>
                    </ul>
                </nav>
                <div className="btn-wrap">
                    <Button text="Login" className="login" />
                </div>
            </div>
        </header>
    );
}
