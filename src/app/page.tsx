import Title from "@/components/Title";
import ReviewSlider from "@/components/ReviewSlider";
import Button from "@/ui/Button";
import TextContent from "@/components/TextContent";
import VideoContent from "@/components/VideoContent";

export default function Home() {
    return (
        <div className="home page">
            <div className="inner">
                <Title />
                <div className="btn-wrap">
                    <Button text="NodeNode" />
                    <Button text="NodeNode" />
                </div>
            </div>
            <ReviewSlider />
            <TextContent bg="3">
                <div className="text-wrap">
                    <h3>Speed Up 🔥</h3>
                    <p>sdfmlkmslfmalskmfal</p>
                    <p>sdfmlkmslfmals</p>
                </div>
            </TextContent>
            <VideoContent />
            <TextContent bg="1">
                <div className="text-wrap">
                    <h3>Battery Up 🔋</h3>
                    <p>sdfmlkmslfmalskmfal</p>
                    <p>sdfmlkmslfmals</p>
                </div>
            </TextContent>
            {/* <Content bg="4">
                <div className="text-wrap">
                    <h3>Capacity Up 🖥️</h3>
                    <p>sdfmlkmslfmalskmfal</p>
                    <p>sdfmlkmslfmals</p>
                </div>
            </Content> */}
        </div>
    );
}