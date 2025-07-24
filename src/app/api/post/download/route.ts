import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { program } = await req.json(); // 어떤 프로그램인지 받음
        if (!program) {
            return NextResponse.json({ message: "프로그램명이 필요합니다." }, { status: 400 });
        }

        const db = (await connectDB).db("Mac-Toolkit");
        const download = db.collection("download");

        // download 카운트 1 증가
        await download.updateOne(
            {},
            { $inc: { [`${program}.download`]: 1 } }
        );

        return NextResponse.json({
            message: "성공적으로 저장되었습니다.",
            program,
        });
    } catch (e) {
        return NextResponse.json(
            { message: "서버 오류 발생", error: (e as Error).message },
            { status: 500 }
        );
    }
}
