import { NextResponse } from "next/server";


export function GET(req) {
    return NextResponse.json({
        name: 'barkat', age: 25, city: 'islamabad'
    })
}