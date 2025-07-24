import SubTitle from "@/components/SubTitle";
import Product from "@/components/Product";
import {
    FAST_BROWSER__HEADER_LIST,
    FAST_BROWSER__BODY_LIST,
    FAST_BROWSER__YOUTUBE_URL,
    FAST_BROWSER__QUESTION_LIST,
} from "@/data/productData";

export default function PhotoManager() {
    return (
        <section className="photo-manager">
                <SubTitle title="Photo Manager" subTitle="for your Mac" right/>
                <Product
                    icon="photo_manager"
                    name="Photo Manager"
                    text="Photo your Mac"
                    headerList={FAST_BROWSER__HEADER_LIST}
                    bodyList={FAST_BROWSER__BODY_LIST}
                    youtubeUrl={FAST_BROWSER__YOUTUBE_URL}
                    questionList={FAST_BROWSER__QUESTION_LIST}
                />
        </section>
    );
}
