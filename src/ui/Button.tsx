
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
        <button className={`${className} button-ui`}>
            {text}
            {children}
        </button>
    );
}
