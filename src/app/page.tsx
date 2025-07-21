import Title from "@/components/Title";
import ReviewSlider from "@/components/ReviewSlider";
import Button from "@/ui/Button";
import SubTitle from "@/components/SubTitle";

export default function Home() {
    return (
        <div className="home page">
            <div className="inner">
                <Title />
                <div className="btn-wrap">
                    <Button text="Download" className="download" />
                    <Button text="Support" className="support" />
                </div>
            </div>
            <ReviewSlider />
            <section className="fast-broswer">
                <div className="inner">
                    <SubTitle title="Want to Jump to" subTitle="The Site Quickly" />
                </div>
            </section>
        </div>
    );
}