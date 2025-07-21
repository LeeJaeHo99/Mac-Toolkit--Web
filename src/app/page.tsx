import Title from "@/components/Title";
import ReviewSlider from "@/components/ReviewSlider";
import Button from "@/ui/Button";
import SubTitle from "@/components/SubTitle";
import Product from "@/components/Product";
import {
    FAST_BROWSER__HEADER_LIST,
    FAST_BROWSER__BODY_LIST,
    FAST_BROWSER__YOUTUBE_URL,
    FAST_BROWSER__QUESTION_LIST,
} from "@/data/productData";

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
                        text="Quick access link"
                        headerList={FAST_BROWSER__HEADER_LIST}
                        bodyList={FAST_BROWSER__BODY_LIST}
                        youtubeUrl={FAST_BROWSER__YOUTUBE_URL}
                        questionList={FAST_BROWSER__QUESTION_LIST}
                    />
                </div>
            </section>
            {/* FAST BROWSER */}
        </div>
    );
}
