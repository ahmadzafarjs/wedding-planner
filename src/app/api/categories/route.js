import dbConnect from "@/src/utils/dbConnect"
import Category from "@/src/models/Category"
import { NextResponse } from 'next/server';

export async function GET() {
    await dbConnect();
    try {
        const categories = await Category.find({});
        return NextResponse.json({ success: true, data: categories });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

export async function POST(request) {
    await dbConnect();
    const body = await request.json();
    try {
        const category = await Category.create(body);
        return NextResponse.json({ success: true, data: category });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}