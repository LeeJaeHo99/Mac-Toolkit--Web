import Image from 'next/image';

export default function VideoContent() {
    return (
        <div className="video-content-wrap">
            <div className="inner">
                <Image src="/images/mac-mock.png" alt="video" width={560} height={560} />
                <div className="text-wrap">
                    <h4>Macasdfa</h4>
                    <p>sdfmlkmslfmalskmfal</p>
                    <p>sdfmlkmslfmalskmfal</p>
                </div>
            </div>
        </div>
    );
}