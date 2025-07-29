import { Heart } from "lucide-react";
import Title from "@/components/Title";
import ReviewSlider from "@/components/ReviewSlider";
import Button from "@/ui/Button";
import FastBrowser from "@/components/section/FastBrowser";
import Logo from "@/components/Logo";

export default function Home() {
    return (
        <div className="home page">
            <div className="inner">
                <Logo />
                <Title />
                <div className="btn-wrap">
                    <Button text="Download" className="download" />
                    <Button text="Support" className="support">
                        <Heart size={18} />
                    </Button>
                </div>
            </div>
            <ReviewSlider />
            <div className="inner">
                <p>It’s super easy to use</p>
                <p>but surprisingly powerful!</p>
                <FastBrowser />
            </div>
        </div>
    );
}
