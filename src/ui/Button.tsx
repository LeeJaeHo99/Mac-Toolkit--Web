"use client";

export default function Button({
    text,
    className,
    children,
}: {
    text: string;
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <button className={`${className} button-ui`} onClick={() => {
            if (className === 'download') {
                window.location.href = `/download/fastBrowser.dmg`;
            }
        }}>
            {text}
            {children}
        </button>
    );
}
