export default function Window({children}: {children: React.ReactNode}) {
    return (
        <div className="apple-window window-ui">
            <div className="apple-window-header">
                <div className="r"></div>
                <div className="y"></div>
                <div className="g"></div>
            </div>
            <div className="apple-window-body">
                <div className="apple-window-body-item">{children}</div>
            </div>
        </div>
    );
}
