import { NextResponse } from 'next/server';
import { connectionDB } from '../../../lib/db';
import category from '../../../models/category';

export async function GET() {
   connectionDB();
   const categorys = await category.find();

   return NextResponse.json({
      categorys,
   });
}

export async function POST(request) {
   try {
      connectionDB();
      const data = await request.json();

      await new category(data).save();

      return NextResponse.json({
         message: 'category created',
      });
   } catch (error) {
      return NextResponse.json(error.message, {
         status: 400,
      });
   }
}
