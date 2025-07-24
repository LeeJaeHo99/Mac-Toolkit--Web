import SubTitle from "@/components/SubTitle";
import Product from "@/components/Product";
import {
    FAST_BROWSER__HEADER_LIST,
    FAST_BROWSER__BODY_LIST,
    FAST_BROWSER__YOUTUBE_URL,
    FAST_BROWSER__QUESTION_LIST,
} from "@/data/productData";

export default function ScheduleManager() {
    return (
        <section className="schedule-manager">
                <SubTitle title="Schedule Manager" subTitle="for your Mac" />
                <Product
                    icon="schedule_manager"
                    name="Schedule Manager"
                    text="Schedule your Mac"
                    headerList={FAST_BROWSER__HEADER_LIST}
                    bodyList={FAST_BROWSER__BODY_LIST}
                    youtubeUrl={FAST_BROWSER__YOUTUBE_URL}
                    questionList={FAST_BROWSER__QUESTION_LIST}
                />
        </section>
    );
}
