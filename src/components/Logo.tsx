import Image from "next/image";

export default function Logo() {
    return (
        <div className="logo-wrap">
            <Image src="/icons/fastBrowser.png" alt="logo" width={160} height={160} />
        </div>
    );
}