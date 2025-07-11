import Title from "@/components/Title";
import Button from "@/ui/Button";

export default function Home() {
    return (
        <div className="home page">
            <div className="inner">
                <Title />
                <div className="btn-wrap">
                    <Button text="NodeNode" />
                    <Button text="NodeNode" />
                </div>
                <div className="text-wrap">
                    <h3>Speed Up 🚀</h3>
                    <h3>Battery Up 🔋</h3>
                    <h3>Capacity Up 🖥️</h3>
                </div>
            </div>
        </div>
    );
}
