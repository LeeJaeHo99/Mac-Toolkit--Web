import Image from "next/image";
import Link from "next/link";
import { FileImage } from "lucide-react";

export default function Product() {
    return (
        <div className="product-wrap">
            <div className="inner">
                <h2>Product</h2>
                <div className="product-list">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                {/* <p>If you have any feature requests, Don’t hesitate to contact us 👍</p> */}
            </div>
        </div>
    );
}

function ProductCard() {
    return (
        <Link href="/" className="product-card">
            <div className="price">$3</div>
            <div className="img-wrap">
                <Image src={'/images/bg/gradient_4.jpg'} alt="product" width={360} height={360} />
            </div>
            <div className="info-wrap">
                <div className="logo">
                    <FileImage />
                </div>
                <div className="info">
                    <h3>Photo Manager</h3>
                    <p>Manage your photos with ease</p>
                </div>
            </div>
        </Link>
    );
}