import SubTitle from "@/components/SubTitle";
import Product from "@/components/Product";
import {
    FAST_BROWSER__HEADER_LIST,
    FAST_BROWSER__BODY_LIST,
    FAST_BROWSER__YOUTUBE_URL,
    FAST_BROWSER__QUESTION_LIST,
} from "@/data/productData";

export default function FastBrowser() {
    return (
        <section className="fast-broswer">
                <SubTitle title="Want to Jump to" subTitle="The Site Quickly" />
                <Product
                    icon="fast_browser"
                    name="Fast Browser"
                    text="Quick access link"
                    headerList={FAST_BROWSER__HEADER_LIST}
                    bodyList={FAST_BROWSER__BODY_LIST}
                    youtubeUrl={FAST_BROWSER__YOUTUBE_URL}
                    questionList={FAST_BROWSER__QUESTION_LIST}
                />
        </section>
    );
}
