import Table from "./Table";
import Question from "./Question";
import { AppleWindowProps, AppleWindowItemProps } from "@/types/props";



export default function AppleWindow({
    activeTab,
    headerList,
    bodyList,
    youtubeUrl,
    questionList,
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
                    questionList={questionList}
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
    questionList,
}: AppleWindowItemProps) {
    return (
        <div className="apple-window-body-item">
            {activeTab === 0 && <div>Preview</div>}
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
            {activeTab === 3 && <Question questionList={questionList} />}
        </div>
    );
}
