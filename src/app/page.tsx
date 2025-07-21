import Title from "@/components/Title";
import ReviewSlider from "@/components/ReviewSlider";
import Button from "@/ui/Button";
import SubTitle from "@/components/SubTitle";
import Product from "@/components/Product";

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

            {/* FAST BROWSER */}
            <section className="fast-broswer">
                <div className="inner">
                    <SubTitle
                        title="Want to Jump to"
                        subTitle="The Site Quickly"
                    />
                    <Product
                        name="Fast Browser"
                        text="Quick access anytime, whatever you're doing"
                        headerList={["Action", "Shortcut"]}
                        bodyList={[
                            ["Show Window / Hide Window", "⌘ + Shift + X"],
                            ["Add Link", "⌘ + A"],
                            ["Delete Link", "⌘ + D"],
                            ["Open Link 1", "⌘ + 1"],
                            ["Open Link 2", "⌘ + 2"],
                            ["Open Link 3", "⌘ + 3"],
                            ["Open Link 4", "⌘ + 4"],
                            ["Open Link 5", "⌘ + 5"],
                            ["Open Link 6", "⌘ + 6"],
                        ]}
                        youtubeUrl="https://www.youtube.com/embed/QdxQZfC70eg?si=L2gqq_m6SBCGivqi"
                    />
                </div>
            </section>
            {/* FAST BROWSER */}
        </div>
    );
}
