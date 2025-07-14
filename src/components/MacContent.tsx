import Image from 'next/image';
import Button from '../ui/Button';

export default function MacContent() {
    return (
        <div className="mac-content-wrap">
            <div className="inner">
                <Image src="/images/mac-mock.png" alt="mac" width={560} height={560} />
                <div className="text-wrap">
                    <h4>The Most Efficient</h4>
                    <p>For Every one</p>
                    <p>For Every Version</p>
                    <Button text="Install Now" className="install-btn" />
                </div>
            </div>
        </div>
    );
}