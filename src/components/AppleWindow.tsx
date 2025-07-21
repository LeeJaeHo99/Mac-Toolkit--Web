import Table from "./Table";

interface AppleWindowProps {
    activeTab: number;
    headerList: string[];
    bodyList: string[][];
    youtubeUrl: string;
    handleCloseActiveTab: () => void;
}

export default function AppleWindow({
    activeTab,
    headerList,
    bodyList,
    youtubeUrl,
    handleCloseActiveTab,
}: AppleWindowProps) {
    return (
        <div className="apple-window">
            <div className="apple-window-header">
                <div className="r" onClick={handleCloseActiveTab}></div>
                <div className="y" onClick={handleCloseActiveTab}></div>
                <div className="g" onClick={handleCloseActiveTab}></div>
            </div>
            <div className="apple-window-body">
                <AppleWindowItem
                    activeTab={activeTab}
                    headerList={headerList}
                    bodyList={bodyList}
                    youtubeUrl={youtubeUrl}
                />
            </div>
        </div>
    );
}

function AppleWindowItem({
    activeTab,
    headerList,
    bodyList,
    youtubeUrl,
}: {
    activeTab: number;
    headerList: string[];
    bodyList: string[][];
    youtubeUrl: string;
}) {
    return (
        <div className="apple-window-body-item">
            {activeTab === 0 && <div>How to use</div>}
            {activeTab === 1 && (
                <Table headerList={headerList} bodyList={bodyList} />
            )}
            {activeTab === 2 && (
                <iframe
                    width="100%"
                    height="100%"
                    src={youtubeUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            )}
            {activeTab === 3 && <div>FAQ</div>}
        </div>
    );
}
