"use client";

export default function Button({
    text,
    className,
    children,
    plusDownloadCount,
}: {
    text: string;
    className?: string;
    children?: React.ReactNode;
    plusDownloadCount?: () => void;
}) {
    const handleDownload = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/download`, {
            method: "POST",
            body: JSON.stringify({ program: "fastBrowser" }),
        });
        plusDownloadCount?.();
    };
    
    return (
        <button className={`${className} button-ui`} onClick={() => {
            if (className === 'download') {
                handleDownload();
                window.location.href = `/download/fastBrowser.dmg`;
            }else if (className === 'support') {
                window.open(`https://github.com/LeeJaeHo99/Fast-Browser`, "_blank");
            }
        }}>
            {text}
            {children}
        </button>
    );
}
