import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongodb";

export async function GET(){
    try{
        const db = (await connectDB).db('Mac-Toolkit');
        const collection = db.collection('download');
        const review = await collection.find({}).toArray();

        return NextResponse.json({
            success: true,
            data: review,
        });
    }
    catch(e){
        return NextResponse.json({
            success: false,
            error: e instanceof Error ? e.message : 'Unknown Error',
        })
    }
}