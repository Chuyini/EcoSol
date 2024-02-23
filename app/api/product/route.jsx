import { NextResponse } from 'next/server';
import { connectionDB } from '../../../lib/db';
import product from '../../../models/product';

export async function GET() {
   connectionDB();
   const products = await product.find();

   return NextResponse.json({
      products,
   });
}

export async function POST(request) {
   try {
      connectionDB();
      const data = await request.json();

      await new product(data).save();

      return NextResponse.json({
         message: 'Product created',
      });
   } catch (error) {
      return NextResponse.json(error.message, {
         status: 400,
      });
   }
}
