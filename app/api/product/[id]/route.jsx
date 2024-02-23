import { NextResponse } from 'next/server';
import { connectionDB } from '../../../../lib/db';
import product from '../../../../models/product';

export async function GET(request, { params }) {
   try {
      connectionDB();
      const productData = await product.findById(params.id);
      if (!productData) {
         return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         productData,
      });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
   }
}

export async function PUT(request, { params }) {
   try {
      connectionDB();
      const data = await request.json();
      const updatedProduct = await product.findByIdAndUpdate(params.id, data, {
         new: true,
      });

      if (!updatedProduct) {
         return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({ updatedProduct });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
   }
}

export async function DELETE(request, { params }) {
   try {
      connectionDB();
      const productDeleted = await product.findByIdAndDelete(params.id);
      if (!productDeleted) {
         return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
         );
      }

      return NextResponse.json({
         productDeleted,
      });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
   }
}
