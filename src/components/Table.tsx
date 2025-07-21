import { TableProps } from "@/types/props";

export default function Table({ headerList, bodyList }: TableProps) {
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
                {bodyList.map(item => (
                    <div className="table-body-item" key={item.title}>
                        <div className="action">{item.title}</div>
                        <div className="shortcut">
                            <div className="shortcut-btn">{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
