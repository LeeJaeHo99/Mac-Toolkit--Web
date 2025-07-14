export default function TextContent({
    children,
    bg,
}: {
    children: React.ReactNode;
    bg: string;
}) {
    return (
        <div
            className="text-content-wrap"
            style={{ backgroundImage: `url(/images/bg/gradient_${bg}.jpg)` }}
        >
            <div className="inner">
                {children}
            </div>
        </div>
    );
}
