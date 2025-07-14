import Title from "@/components/Title";
import ReviewSlider from "@/components/ReviewSlider";
import Button from "@/ui/Button";
import TextContent from "@/components/TextContent";
import MacContent from "@/components/MacContent";
import Product from "@/components/Product";

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
            <MacContent />
            <TextContent bg="3">
                <div className="text-wrap">
                    <h3>Again New</h3>
                    <p>If Your Mac is Old?</p>
                    <p>We Can Make It New Again!</p>
                </div>
                <div className="icon-wrap">🖥️</div>
            </TextContent>
            <Product />
        </div>
    );
}
