export default function Table({
    headerList,
    bodyList,
}: {
    headerList: string[];
    bodyList: string[][];
}) {
    return (
        <div className="table">
            <div className="table-header">
                {headerList.map((item) => (
                    <div className="table-header-item" key={item}>
                        {item}
                    </div>
                ))}
            </div>
            <div className="table-body">
                {bodyList.map((item) => (
                    <div className="table-body-item" key={item[0]}>
                        <div className="action">{item[0]}</div>
                        <div className="shortcut">
                            <div className="shortcut-btn">{item[1]}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
