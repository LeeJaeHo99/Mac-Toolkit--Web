import { Heart } from "lucide-react";
import Title from "@/components/Title";
import ReviewSlider from "@/components/ReviewSlider";
import Button from "@/ui/Button";
import FastBrowser from "@/components/section/FastBrowser";
import Contron from "@/components/section/Contron";
import ScheduleManager from "@/components/section/ScheduleManager";
import PhotoManager from "@/components/section/PhotoManager";
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
                <FastBrowser />
                <Contron />
                <ScheduleManager />
                <PhotoManager />
            </div>
        </div>
    );
}
