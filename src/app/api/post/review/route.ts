import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { program, review } = await req.json();
        if (!program || !review) {
            return NextResponse.json({ message: "프로그램명과 리뷰가 필요합니다." }, { status: 400 });
        }

        const db = (await connectDB).db("Mac-Toolkit");
        const download = db.collection("download");

        await download.updateOne(
            {},
            { $push: { [`${program}.review`]: review } }
        );

        return NextResponse.json({
            message: "리뷰가 성공적으로 저장되었습니다.",
            program,
            review,
        });
    } catch (e) {
        return NextResponse.json(
            { message: "서버 오류 발생", error: (e as Error).message },
            { status: 500 }
        );
    }
}
