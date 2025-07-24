
export default function Button({
    text,
    className,
    children,
    onClick,
}: {
    text: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <button className={`${className} button-ui`} onClick={onClick}>
            {text}
            {children}
        </button>
    );
}
