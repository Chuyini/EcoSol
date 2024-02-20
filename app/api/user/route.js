import { NextResponse } from "next/server";
import { connectionDB } from "../../../lib/db";
import user from "../../../models/user";

export async function GET() {
    connectionDB();
    const users = await user.find();

    return NextResponse.json({ 
       users ,
    });
}

export async function POST(request) {
    try{
        connectionDB(); 
        const data = await request.json();
        console.log(data);

        await new user(data).save();

        return NextResponse.json({ 
            message: "User created" ,
        });
    } catch(error){
        return NextResponse.json(
            error.message,{
                status: 400,
            }
        );
    }
}