import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/mongodb";

export async function POST(request: NextRequest) {
    try {
        const forwarded = request.headers.get("x-forwarded-for");
        const realIP = request.headers.get("x-real-ip");
        const ip = forwarded ? forwarded.split(",")[0] : realIP || "unknown";

        const client = await connectDB;
        const db = client.db();
        const logCollection = db.collection("log");

        const logData = {
            ip: ip,
            timestamp: new Date(),
            userAgent: request.headers.get("user-agent") || "unknown",
            action: "download",
            program: "fastBrowser"
        };

        await logCollection.insertOne(logData);

        return NextResponse.json({ success: true, message: "로그가 성공적으로 저장되었습니다." });
    } catch (error) {
        console.error("로그 저장 중 오류 발생:", error);
        return NextResponse.json(
            { success: false, message: "로그 저장 중 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}
