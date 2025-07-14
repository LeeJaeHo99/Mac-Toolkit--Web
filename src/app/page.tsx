import Title from "@/components/Title";
import ReviewSlider from "@/components/ReviewSlider";
import Button from "@/ui/Button";
import Content from "@/components/Content";

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
            <Content />
        </div>
    );
}

{
    /* <h3>Battery Up 🔋</h3>
<h3>Capacity Up 🖥️</h3> */
}
