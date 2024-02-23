import { NextResponse } from 'next/server';
import { connectionDB } from '../../../lib/db';
import binnacle from '../../../models/binnacle';

export async function GET() {
   connectionDB();
   const binnacles = await binnacle.find();

   return NextResponse.json({
      binnacles,
   });
}

export async function POST(request) {
   try {
      connectionDB();
      const data = await request.json();

      await new binnacle(data).save();

      return NextResponse.json({
         message: 'binnacle created',
      });
   } catch (error) {
      return NextResponse.json(error.message, {
         status: 400,
      });
   }
}
