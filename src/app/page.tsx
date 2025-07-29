"use client";

import { Heart } from "lucide-react";
import Title from "@/components/Title";
import ReviewSlider from "@/components/ReviewSlider";
import Button from "@/ui/Button";
import Logo from "@/components/Logo";
import Window from "@/components/Window";
import Image from "next/image";
import Table from "@/components/Table";
import {
    FAST_BROWSER__HEADER_LIST,
    FAST_BROWSER__BODY_LIST,
} from "@/data/productData";
import { useState, useEffect } from "react";

export default function Home() {
    const [downloadCount, setDownloadCount] = useState(0);

    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/get/review`
            );
            const data = await response.json();
            setDownloadCount(data.data[0].fastBrowser.download);
        };
        fetchProductData();
    }, []);

    const plusDownloadCount = () => {
        setDownloadCount(downloadCount + 1);
    };
    

    return (
        <div className="home page">
            <div className="inner">
                <Logo />
                <Title />
                <div className="btn-wrap">
                    <Button text="Download" className="download" plusDownloadCount={plusDownloadCount} />
                    <Button text="Support" className="support">
                        <Heart size={18} />
                    </Button>
                </div>
                <div className="review-wrap">
                    <div className="download">
                        <span className="review-num">{downloadCount}</span>
                        <span className="review-title">Downloads</span>
                    </div>
                </div>
            </div>
            <ReviewSlider />
            <div className="inner">
                <div className="disc-text-wrap mar-b--160">
                    <p className="disc-text">It’s super easy to use</p>
                    <p className="disc-text">
                        But surprisingly <span>powerful!</span>
                    </p>
                </div>
                <div className="disc-text-wrap right mar-b--40">
                    <p className="disc-text">
                        Just click the <span>Globe icon</span> in your menu bar
                    </p>
                    <p className="disc-text">
                        Or hit the shortcut — That’s It.
                    </p>
                </div>
                <Window>
                    <Image
                        className="fast-browser-logo"
                        src="/icons/logo2.png"
                        alt="fastBrowser_logo"
                        width={80}
                        height={80}
                    />
                    <span className="or-text">OR</span>
                    <div className="shortcut-in-window">
                        <div className="shortcut-btn">⌘ + Shift + X</div>
                    </div>
                </Window>
                <div className="disc-text-wrap mar-b--40">
                    <p className="disc-text">Next thing you know</p>
                    <p className="disc-text">
                        A cute window <span>shows up!</span>
                    </p>
                </div>
                <Window>
                    <Image
                        className="capture-img"
                        src="/images/capture1.png"
                        alt="fastBrowser"
                        width={320}
                        height={320}
                    />
                </Window>
                <div className="disc-text-wrap mar-b--40 right">
                    <p className="disc-text">
                        Just click the + button, add the link you want
                    </p>
                    <p className="disc-text">
                        And you’re <span>all set!</span>
                    </p>
                </div>
                <Window>
                    <Image
                        className="capture-img"
                        src="/images/capture2.png"
                        alt="fastBrowser"
                        width={320}
                        height={320}
                    />
                </Window>
                <div className="disc-text-wrap mar-b--40">
                    <p className="disc-text">Want to delete something?</p>
                    <p className="disc-text">
                        Click the trash icon, and <span>choose the link!</span>
                    </p>
                </div>
                <Window>
                    <Image
                        className="capture-img"
                        src="/images/capture3.png"
                        alt="fastBrowser"
                        width={320}
                        height={320}
                    />
                </Window>
                <div className="disc-text-wrap mar-b--40 right">
                    <p className="disc-text">
                        No mouse? <span>No problem</span>
                    </p>
                    <p className="disc-text">
                        This shortcut does the job all on its own
                    </p>
                </div>
                <Window>
                    <Table
                        headerList={FAST_BROWSER__HEADER_LIST}
                        bodyList={FAST_BROWSER__BODY_LIST}
                    />
                </Window>
                <div className="disc-text-wrap mar-b--40 center">
                    <p className="disc-text">And that’s it!</p>
                    <p className="disc-text">
                        Told you it was <span>easy</span>, right?
                    </p>
                </div>
            </div>
        </div>
    );
}
