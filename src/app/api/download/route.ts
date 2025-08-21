import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const file = searchParams.get("file");
        
        if (!file) {
            return NextResponse.json({ error: "파일명이 필요합니다." }, { status: 400 });
        }

        // public 폴더의 파일 경로
        const filePath = path.join(process.cwd(), "public", "download", file);
        
        // 파일 존재 확인
        try {
            await fs.access(filePath);
        } catch {
            return NextResponse.json({ error: "파일을 찾을 수 없습니다." }, { status: 404 });
        }

        // 파일 읽기
        const fileBuffer = await fs.readFile(filePath);
        
        // 파일 확장자에 따른 Content-Type 설정
        const ext = path.extname(file).toLowerCase();
        let contentType = "application/octet-stream";
        
        if (ext === ".dmg") {
            contentType = "application/x-apple-diskimage";
        } else if (ext === ".zip") {
            contentType = "application/zip";
        } else if (ext === ".exe") {
            contentType = "application/x-msdownload";
        }

        // 다운로드 응답 생성
        const response = new NextResponse(fileBuffer);
        response.headers.set("Content-Type", contentType);
        response.headers.set("Content-Disposition", `attachment; filename="${file}"`);
        response.headers.set("Content-Length", fileBuffer.length.toString());
        
        return response;
    } catch (error) {
        console.error("다운로드 오류:", error);
        return NextResponse.json({ error: "다운로드 중 오류가 발생했습니다." }, { status: 500 });
    }
}
